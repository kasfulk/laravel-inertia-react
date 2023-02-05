import './bootstrap';
import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from '@inertiajs/progress';
import { MantineProvider } from '@mantine/core';

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        return pages[`./Pages/${name}.jsx`]
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
