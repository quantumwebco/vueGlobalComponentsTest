import ComponentRegistration from "./ComponentRegistration";

export default {
    install: (app, options) => {
        app.use(ComponentRegistration);
    },
};
