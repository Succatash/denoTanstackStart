/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root.tsx'
import { Route as DashboardRouteImport } from './routes/dashboard/route.tsx'
import { Route as MainLayoutRouteImport } from './routes/_mainLayout/route.tsx'
import { Route as MainLayoutIndexImport } from './routes/_mainLayout/index.tsx'
import { Route as DashboardFormImport } from './routes/dashboard/form.tsx'
import { Route as MainLayoutRegisterImport } from './routes/_mainLayout/register.tsx'
import { Route as MainLayoutLoginImport } from './routes/_mainLayout/login.tsx'

// Create/Update Routes

const DashboardRouteRoute = DashboardRouteImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const MainLayoutRouteRoute = MainLayoutRouteImport.update({
  id: '/_mainLayout',
  getParentRoute: () => rootRoute,
} as any)

const MainLayoutIndexRoute = MainLayoutIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => MainLayoutRouteRoute,
} as any)

const DashboardFormRoute = DashboardFormImport.update({
  id: '/form',
  path: '/form',
  getParentRoute: () => DashboardRouteRoute,
} as any)

const MainLayoutRegisterRoute = MainLayoutRegisterImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => MainLayoutRouteRoute,
} as any)

const MainLayoutLoginRoute = MainLayoutLoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => MainLayoutRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_mainLayout': {
      id: '/_mainLayout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof MainLayoutRouteImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardRouteImport
      parentRoute: typeof rootRoute
    }
    '/_mainLayout/login': {
      id: '/_mainLayout/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof MainLayoutLoginImport
      parentRoute: typeof MainLayoutRouteImport
    }
    '/_mainLayout/register': {
      id: '/_mainLayout/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof MainLayoutRegisterImport
      parentRoute: typeof MainLayoutRouteImport
    }
    '/dashboard/form': {
      id: '/dashboard/form'
      path: '/form'
      fullPath: '/dashboard/form'
      preLoaderRoute: typeof DashboardFormImport
      parentRoute: typeof DashboardRouteImport
    }
    '/_mainLayout/': {
      id: '/_mainLayout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof MainLayoutIndexImport
      parentRoute: typeof MainLayoutRouteImport
    }
  }
}

// Create and export the route tree

interface MainLayoutRouteRouteChildren {
  MainLayoutLoginRoute: typeof MainLayoutLoginRoute
  MainLayoutRegisterRoute: typeof MainLayoutRegisterRoute
  MainLayoutIndexRoute: typeof MainLayoutIndexRoute
}

const MainLayoutRouteRouteChildren: MainLayoutRouteRouteChildren = {
  MainLayoutLoginRoute: MainLayoutLoginRoute,
  MainLayoutRegisterRoute: MainLayoutRegisterRoute,
  MainLayoutIndexRoute: MainLayoutIndexRoute,
}

const MainLayoutRouteRouteWithChildren = MainLayoutRouteRoute._addFileChildren(
  MainLayoutRouteRouteChildren,
)

interface DashboardRouteRouteChildren {
  DashboardFormRoute: typeof DashboardFormRoute
}

const DashboardRouteRouteChildren: DashboardRouteRouteChildren = {
  DashboardFormRoute: DashboardFormRoute,
}

const DashboardRouteRouteWithChildren = DashboardRouteRoute._addFileChildren(
  DashboardRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '': typeof MainLayoutRouteRouteWithChildren
  '/dashboard': typeof DashboardRouteRouteWithChildren
  '/login': typeof MainLayoutLoginRoute
  '/register': typeof MainLayoutRegisterRoute
  '/dashboard/form': typeof DashboardFormRoute
  '/': typeof MainLayoutIndexRoute
}

export interface FileRoutesByTo {
  '/dashboard': typeof DashboardRouteRouteWithChildren
  '/login': typeof MainLayoutLoginRoute
  '/register': typeof MainLayoutRegisterRoute
  '/dashboard/form': typeof DashboardFormRoute
  '/': typeof MainLayoutIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_mainLayout': typeof MainLayoutRouteRouteWithChildren
  '/dashboard': typeof DashboardRouteRouteWithChildren
  '/_mainLayout/login': typeof MainLayoutLoginRoute
  '/_mainLayout/register': typeof MainLayoutRegisterRoute
  '/dashboard/form': typeof DashboardFormRoute
  '/_mainLayout/': typeof MainLayoutIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/dashboard'
    | '/login'
    | '/register'
    | '/dashboard/form'
    | '/'
  fileRoutesByTo: FileRoutesByTo
  to: '/dashboard' | '/login' | '/register' | '/dashboard/form' | '/'
  id:
    | '__root__'
    | '/_mainLayout'
    | '/dashboard'
    | '/_mainLayout/login'
    | '/_mainLayout/register'
    | '/dashboard/form'
    | '/_mainLayout/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  MainLayoutRouteRoute: typeof MainLayoutRouteRouteWithChildren
  DashboardRouteRoute: typeof DashboardRouteRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  MainLayoutRouteRoute: MainLayoutRouteRouteWithChildren,
  DashboardRouteRoute: DashboardRouteRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_mainLayout",
        "/dashboard"
      ]
    },
    "/_mainLayout": {
      "filePath": "_mainLayout/route.tsx",
      "children": [
        "/_mainLayout/login",
        "/_mainLayout/register",
        "/_mainLayout/"
      ]
    },
    "/dashboard": {
      "filePath": "dashboard/route.tsx",
      "children": [
        "/dashboard/form"
      ]
    },
    "/_mainLayout/login": {
      "filePath": "_mainLayout/login.tsx",
      "parent": "/_mainLayout"
    },
    "/_mainLayout/register": {
      "filePath": "_mainLayout/register.tsx",
      "parent": "/_mainLayout"
    },
    "/dashboard/form": {
      "filePath": "dashboard/form.tsx",
      "parent": "/dashboard"
    },
    "/_mainLayout/": {
      "filePath": "_mainLayout/index.tsx",
      "parent": "/_mainLayout"
    }
  }
}
ROUTE_MANIFEST_END */
