import { cva } from "class-variance-authority"

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-fitness-green to-fitness-blue text-primary-foreground shadow hover:bg-primary/90 hover:shadow-lg hover:scale-105 transition-all duration-200",
        destructive:
          "bg-gradient-to-r from-fitness-red to-red-600 text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground hover:border-fitness-green",
        secondary:
          "bg-card text-card-foreground shadow-sm hover:bg-accent/80 border border-border",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        fitness: "bg-gradient-to-r from-fitness-orange to-fitness-yellow text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200",
        premium: "bg-gradient-to-r from-fitness-purple to-fitness-blue text-white shadow-lg hover:shadow-xl border border-fitness-green/20 hover:border-fitness-green/40 hover:scale-105 transition-all duration-300"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        fitness: "border-transparent bg-gradient-to-r from-fitness-green to-fitness-blue text-white hover:shadow-lg",
        success: "border-transparent bg-fitness-green text-white hover:bg-fitness-green/80",
        warning: "border-transparent bg-fitness-orange text-white hover:bg-fitness-orange/80",
        danger: "border-transparent bg-fitness-red text-white hover:bg-fitness-red/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)