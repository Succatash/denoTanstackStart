// app/routes/index.tsx
import * as fs from 'node:fs';
import {createFileRoute, useRouter} from '@tanstack/react-router';
import {createServerFn} from '@tanstack/start';
import {Button} from '@/components/ui/button.tsx';
import {SidebarProvider, SidebarTrigger} from '@/components/ui/sidebar.tsx';
import {AppSidebar} from '@/components/app-sidebar.tsx';
import {ReactNode, useState} from 'react';
import {ModeToggle} from '@/components/mode-toggle.tsx';

const filePath = 'count.txt';

async function readCount() {
	return parseInt(
		await fs.promises.readFile(filePath, 'utf-8').catch(() => '0')
	);
}

const getCount = createServerFn({
	method: 'GET',
}).handler(() => {
	return readCount();
});

const updateCount = createServerFn({method: 'POST'})
	.validator((d: number) => d)
	.handler(async ({data}) => {
		const count = await readCount();
		await fs.promises.writeFile(filePath, `${count + data}`);
	});

export const Route = createFileRoute('/')({
	component: Home,
	loader: async () => await getCount(),
});

function Home({children}: {children: ReactNode}) {
	const router = useRouter();
	const state = Route.useLoaderData();
	const [open, setOpen] = useState(false);

	return (
		<>
			<SidebarProvider open={open} onOpenChange={setOpen}>
				<AppSidebar />
				<main>
					<div className="flex flex-row justify-center items-center space-x-2">
						{/* TODO: Add a custom trigger button with custom Icons */}
						<SidebarTrigger />{' '}
						{open ? (
							<p className="text-xs">Close Sidebar</p>
						) : (
							<p className="text-xs">Open Sidebar</p>
						)}
					</div>
					<ModeToggle />
					{children}
					<Button
						variant="destructive"
						type="button"
						className="bg-red-400"
						onClick={() => {
							updateCount({data: 2}).then(() => {
								router.invalidate();
							});
						}}
					>
						Add 2
					</Button>
					<p className="bg-amber-200">Count:{state} </p>
				</main>
			</SidebarProvider>
		</>
	);
}
