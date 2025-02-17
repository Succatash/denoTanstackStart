import {createFileRoute} from '@tanstack/react-router';
import {Alert, AlertTitle, AlertDescription} from '@/components/ui/alert.tsx';

export const Route = createFileRoute('/about')({
	head: () => ({
		meta: [{title: 'About Page'}],
	}),
	component: Home,
});

function Home() {
	return (
		<Alert variant="destructive">
			<AlertTitle>Alert Title</AlertTitle>
			<AlertDescription>Alert Description</AlertDescription>
		</Alert>
	);
}
