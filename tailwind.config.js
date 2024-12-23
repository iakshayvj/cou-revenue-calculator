/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          tertiary: 'var(--color-bg-tertiary)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)',
        },
        interactive: {
          primary: 'var(--color-interactive-primary)',
          hover: 'var(--color-interactive-hover)',
          active: 'var(--color-interactive-active)',
          focus: 'var(--color-interactive-focus)',
        },
        accent: {
          primary: 'var(--color-accent-primary)',
          secondary: 'var(--color-accent-secondary)',
        },
        success: {
          light: 'var(--color-success-light)',
          base: 'var(--color-success-base)',
          dark: 'var(--color-success-dark)',
        },
        error: {
          light: 'var(--color-error-light)',
          base: 'var(--color-error-base)',
          dark: 'var(--color-error-dark)',
        },
        warning: {
          light: 'var(--color-warning-light)',
          base: 'var(--color-warning-base)',
          dark: 'var(--color-warning-dark)',
        },
        info: {
          light: 'var(--color-info-light)',
          base: 'var(--color-info-base)',
          dark: 'var(--color-info-dark)',
        },
        component: {
          card: 'var(--color-component-card)',
          border: 'var(--color-component-border)',
          input: 'var(--color-component-input)',
          inputBorder: 'var(--color-component-input-border)',
        },
      },
    },
  },
  plugins: [],
};