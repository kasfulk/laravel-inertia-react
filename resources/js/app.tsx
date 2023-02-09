import './bootstrap';
import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from '@inertiajs/progress';
import { MantineProvider } from '@mantine/core';

createInertiaApp({
    resolve: name => {
      // @ts-ignore
        const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true })
        return pages[`./Pages/${name}.tsx`]
      },
    setup({ el, App, props }) {
        createRoot(el).render(<React.StrictMode>
                      <MantineProvider withNormalizeCSS withGlobalStyles>
                        <App {...props} />
                      </MantineProvider>
                    </React.StrictMode>);
    }
});

InertiaProgress.init();
