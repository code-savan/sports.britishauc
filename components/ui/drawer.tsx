// This file is intentionally left empty as the drawer component is not used in the application

'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

// Since we're not using the drawer component in the application,
// we'll create a simplified version that satisfies the type system
// but doesn't try to fully replicate the functionality

// Create empty components that satisfy the type system
const Drawer = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
const DrawerTrigger = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
const DrawerPortal = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
const DrawerClose = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
const DrawerOverlay = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("fixed inset-0 z-50 bg-black/80", className)} {...props} />
  )
);
const DrawerContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("fixed inset-x-0 bottom-0 z-50", className)} {...props}>
      {children}
    </div>
  )
);
const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("grid gap-1.5 p-4", className)} {...props} />
);
const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
);
const DrawerTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2 ref={ref} className={cn("text-lg font-semibold", className)} {...props} />
  )
);
const DrawerDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  )
);

// Set display names
DrawerOverlay.displayName = 'DrawerOverlay';
DrawerContent.displayName = 'DrawerContent';
DrawerTitle.displayName = 'DrawerTitle';
DrawerDescription.displayName = 'DrawerDescription';

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
