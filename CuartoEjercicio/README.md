# Cuestionario

## 1. ¿Porque no debería usar la libreria JQuery, si estoy usando ReactJS?

Porque JQuery es una libreria enfocada en simplificar y agilizar el desarrollo con JavaScript. React tiene una funcion distinta ya que se enfoca en construir nuestra interfaz de usuario separandolo por componentes y actualizandolos independientemente, esta mas enfocado en las vistas.

## 2. ¿Porque usarias Hooks de las nuevas versiones de ReactJS, en lugar de class component?

Porque los Hooks nos permite hacer el codigo mas mantenible, fácil de entender, reutilizable y mucho mas legible, React trae multiples hooks que nos ayudan a simplificar muchas tareas. Además los hooks funcionan con componetes stateless y esto nos da una ventaja al momento de empaquetarlo por ejemplo en Webpack ya que las funciones van hacer menos pesadas que una clase, otra característica es que son mas fácil de testear.

## 3. ¿Que es un archivo JSX?

Son una extensión de lenguaje JavaScript y nos ayudan a identificar en nuestro proyecto cuales son los componentes, ya que los escribimos con jsx.

## 4. ¿Que diferencia hay entre una function y un arrow function de JavaScrip?

Las diferencia es en el contexto en que se crean, por ejemplo una function normal cuando se llama hay se crea el contexto, en una arrow function el contexto se crea cuando se define, esto quiere decir que la palabra reservada *this* cuando se llama en una function normal como metodo *this* va pertenecer al metodo y cuando es un arrow function *this* siempre será en el contexto en que fue decalarada.

## 5. ¿Que es Redux y como nos ayuda en los proyectos?

Redux es una libreria creada en JavaScript que se puede usar en cualquier framework y nos ayuda a manejar el estado global de nuestra aplicación, compartiendo el estado en los componentes que los necesiten.

## 6. ¿Que nos permite hacer la siguiente declaración?

```jsx
const anyFunction = (param_1) => (param_2) => param_1 + param_2
```

La siguiente función nos crea un closure, esto nos permite acceder al ambito de una función exterior desde una interior, en este caso la segunda función puede acceder al parametro de la primera y así sumarlos.