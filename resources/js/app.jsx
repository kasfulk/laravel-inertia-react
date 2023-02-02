import './bootstrap';
import React from "react";
import ReactDOM from "react-dom/client";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from '@inertiajs/progress';
import { MantineProvider } from '@mantine/core';

const root = ReactDOM.createRoot(document.getElementById("root"));

createInertiaApp({
    resolve: name => import(`./Pages/${name}.jsx`),
    setup({ el, App, props }) {
        root.render(<React.StrictMode>
                      <MantineProvider withNormalizeCSS withGlobalStyles>
                        <App {...props} />
                      </MantineProvider>
                    </React.StrictMode>);
    }
});

InertiaProgress.init();
