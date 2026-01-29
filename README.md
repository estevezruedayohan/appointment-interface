# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

### Explanation

graph TD
subgraph "CHILD COMPONENT (Search.jsx)"
A[User writes 'Fido'] --> B("onChange={(event)}")
B --> C["onQueryChange('Fido')"]
end

    C -- "Load the dato (Lifting State Up)" --> D

    subgraph "PARENT COMPONENT (App.jsx)"
    D["(myQuery) => setQuery(myQuery)"] --> E["State query = 'Fido'"]
    E --> F{"¿Changed query?"}
    F -- SI --> G["useMemo() execute filterAppointments"]
    G --> H["filteredAppointments gets update"]
    H --> I["filteredAppointments.map(...)"]
    end

    I -- "Download the dato (Props)" --> J["AppointmentInfo (Only 'Fido')"]

## TODO:Para terminar de cerrar este ciclo de aprendizaje, ¿te gustaría que implementemos ahora el sistema de ordenamiento (Sort By)?

Ya tienes el botón y el DropDown en tu código, solo nos falta:
Crear un estado para el criterio de orden (ej. por nombre, por fecha).
Crear un estado para la dirección (ascendente o descendente).
Ajustar nuestra herramienta filterTools.js para que, además de filtrar, ordene los resultados antes de mostrarlos.

¿Te gustaría que mañana empecemos directamente modificando la función en filterTools.js o prefieres que revisemos primero el estado del DropDown?
