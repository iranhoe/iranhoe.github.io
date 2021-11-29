---
layout: post
category: devblog
title: "Preguntas que hago para entrevistas"
---

<style>
  /* .main-content {
    padding: 3rem 0rem;
  } */

  .hide {
      display: none;
  }

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>

## Estos son los temas que pregunto

<label class="switch">
  <input id="lang-switch" type="checkbox" />
  <span class="slider round"></span>
</label> CAMBIAR PREGUNTAS Y RESPUESTAS A INGLES

*Gracias a Mel y a Walter por sus aportaciones, responder preguntas, complementar, sugerencias para la pagina y corregir typos*

> NOTA: No saber algo LVL 1 es mas malo que no saber algo de LVL 5, esto es muy a criterio.  
> Ejemplo fallar 1/10 preguntas de LVL 1 de OOP no es malo, Fallar 9/10  ya responder solo de LVL 5 puede interpretarse como que solo se busco términos rapidos sin fundamentos.  

> NOTA: Agrego una columna para ingles, Mi intención es ayudar a la gente que aun no domina el ingles. Por otra parte creo que también ayudaría ver la diferencia de explicar un tópico en español e ingles.

{% include toc.md %}

Las preguntas estan en ingles porque lo normal es entrevistar en ingles
en alguna actualizacion cambiare eso a español e ingles.

### OOP

| LVL | Lugar | Pregunta                                    | Question                              | Indicio/Respuesta                                                                                                                                                                                                                             | Hint/Answer |
|:---:| ----- | ------------------------------------------- | ------------------------------------- |---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  2  | HE    | Pilares de la POO                           | Pillar of OOP                         | Herencia, Polimorfismo, Encapsulacion, Abstraccion.                                                                                                                                                                                           | Inheritance, Polymorphism Encapsulation, Abstraction |
|  1  | HE    | Herencia                                    | Inheritance                           |                                                                                                                                                                                                                                               | Ability to crate new abstractions based on existing abstractions (classes) by deriving the existing behaviour we can re-use, extend or modify the base class. |
|  3  | HE    | Polimorfismo                                | Polymorphism                          |                                                                                                                                                                                                                                               | Is the property in a programming language that allows objects of different types to be substituted for one another in program flow without needing to know ahead of time what the object's type. |
|  1  | HE    | Encapsulacion                               | Encapsulation                         |                                                                                                                                                                                                                                               | Protective encasement that permits access to an object's data only via specifically assigned operations. |
|  2  | HE    | Abstraccion                                 | Abstraction                           |                                                                                                                                                                                                                                               | Showing only the essential attributes of something and hiding any implementation finromation that is unncessary to the user |
|  1  | E     | Ejemplo de Herencia                         | Examples of Injeritance               |                                                                                                                                                                                                                                               | A subclass extending a superclass |
|  1  | HE    | Ejemplo de Polimorfismo                     | Examples of Polymorphism              | Override y overloding son parte del polimorfismo, upcasting y downcasting también                                                                                                                                                             | |
|  1  | E     | Ejemplo de Encapsularon                     | Examples of Encapsulation             |                                                                                                                                                                                                                                               | private fields, props (getter and setters), encapsulate what varies principle |
|  1  | E     | Ejemplo de Abstracción                      | Examples of Abstraction               |                                                                                                                                                                                                                                               | Create private methods to hide implementation details, abstract out functions and methods that are common across multiple instances and create a single generalized concept |
|  2  | H     | Abstract vs interface                       | Abstract vs interface                 |                                                                                                                                                                                                                                               | Abstract is used for the inherit chain, Interface defines a contract that must be implemented, abstract classes can have base implementation, interfaces usually only have props and methods definition (C# 8.0 allows interface default methods implementations) |
|  3  | HLUE  | Modificadores de acceso                     | Access modifiers                      |                                                                                                                                                                                                                                               | **public**: type or member can be accessed from anywhere <br /> **private**: type or member can be only accessed within the same class <br /> **protected**: type or member can be accessed within the same class or a deriving class <br /> **internal**: type or member can be accessed anywhere in the declaring assembly <br /> **private protected**: can be accessed only in the declaring assembly by code in the same class or a derived one <br /> **protected internal**: can be accessed only in declaring assembly, or by a deriving class in another assembly. |
|  1  | E     | herencia multiple                           | Multi inheritance                     |                                                                                                                                                                                                                                               | C# does not allow mutiple inheritance through classes, we must implement multiple interfaces, see [deadly diamond of death problem](https://en.wikipedia.org/wiki/Multiple_inheritance#The_diamond_problem) |
|  2  | HUE   | sobre-escritura                             | override                              |                                                                                                                                                                                                                                               | Declare a **virtual** method in a base class, then use **override** modifier in child class method, that way we modifiy the existing behavior (polymorphism) |
|  2  | HUE   | sobrecarga                                  | overloading                           |                                                                                                                                                                                                                                               | Declare several methods with almost same signature except for parameters number or type |
|  2  | HE    | protect/private vs internal                 | protect/private vs internal           | ver modificadores de acceso                                                                                                                                                                                                                   | |
|  3  | E     | struct                                      | struct                                |                                                                                                                                                                                                                                               | Value type akin to a class where you can encapsulate data and related functionality |
|  2  | HE    | Reference Type                              | Reference Type                        | - Donde se guardan los objetos <br /> - Referencia de memoria <br > - Se almacena en el heap                                                                                                                                                  |
|  2  | HE    | Value Type                                  | Value Type                            | - Se libera automaticamente <br /> - vive en el Stack                                                                                                                                                                                         |
|  3  | E     | Managed and Unmanaged Code                  | Managed and Unmanaged Code            |                                                                                                                                                                                                                                               | Managed: compiler - unmanaged: os |
|  3  | E     | Memory                                      | Memory                                | Heap & Stack, los dos se almacenan en la memoria RAM, son un concepto lógico.                                                                                                                                                                 |
|  3  | E     | Memory: Heap                                | Memory: Heap                          | - Se libera manual: Se aloja con el new y se libera con el delete. <br /> - Es mas lento <br> Memoria en la que residen los objetos. Tipo por referencia                                                                                      | It is the memory in which objects reside. Reference Types |
|  3  | E     | Memory: Stack                               | Memory: Stack                         | - Se libera automáticamente. <br /> - Es mas rapida <br /> - Se utiliza para almacenar valores, no punteros. <br /> Stack es un bloque de memoria para almacenar variables locales y parametros. Memoria de la computadora, Memoria Temporal  | Stack is a block of memory for storing local variables and parameters. Computer's Memory, Temprary Storage Memory
|  3  | E     | Static class                                | Static class                          |                                                                                                                                                                                                                                               | Signature modifier that indicates all members should be static, that is, you don't need to create an instance of the class to reference that member
|  2  | E     | Donde se guarda el tipo Valor               | Where the **Value Type** is stored    | Se guardan en el stack                                                                                                                                                                                                                        |
|  2  | E     | Donde se guarda el tipo de Ref              | Where the **Ref Type** is stored      | SE guardan en el Heap                                                                                                                                                                                                                         |
|  5  | E     | Boxing                                      | Boxing                                | Boxing es el acto de hacer cas a un **value type** aun **reference type**, puede *reference type* puede ser un objecto clase o una interfaz. <br /> Ejemplo C#: <br /> ``` int = 123; ``` <br /> ``` object o = i; \\ boxing ```              |
|  5  | E     | Unboxing                                    | Unboxing                              | ``` 0 = 123; ``` <br /> ``` i = (int)o;  \\ unboxing```                                                                                                                                                                                       |
|  ?  | E     | Clase abstracta                             | Abstract Class                        | Son placeholder para la implementación de clases reales <br /> no pueden ser instanciadas.
|  ?  | E     | Diferencia clase abstracta y una clase      | Abstract Class vs Normal              | Las clases regulares todos los métodos están completamente implementados, una clase abstracta sus funciones no estan definidas (son abstractas).
|  2  | L     | Constructor Clases abstractas               | Abstract class constructor            | |
|  3  |       | Upcasting (polymorphsim)                    | Upcasting                             | Utillizar una subclase en un metodo o statement que espera su super clase o interfaz:<br />Supongamos que Dog: Animal, entonces es posible:<br /> ``` Animal huesos = new Dog(); ```<br />y tambien: <br />```Dog huesos = new Dog();``` <br />```trainer.FeedAnimal(huesos) //Si espera un objeto tipo Animal```
|  3  |       | Downcasting (polymorphism)                  | Downcasting                           | Utilizar una referencia upcasteada previamente y regresarla a su tipo original  *Operacion costosa en tiempo de ejecucion, ejemplo: <br />```void FeedAnimal(Animal animal){``` <br />``` if(animal is Dog){ ``` <br />```  Dog dog = animal as Dog; ``` <br />``` } ``` |
|  5  |       | Covariance and contravariance               | Covariance and contravariance         |                                                                                                                                                                                                                                               | Enable implicit reference conversion for array types, delegate types, and generic tpye arguments:<br />```Ienumerable<string> strings = new List<string>();```<br />```Ienumerable<object> objects = strings;```<br /><br />Contravariance:<br />```Action<object> actObject = SetObject;```<br />```Action<string> actString = actObject;```

<a href="#markdown-toc">regresar</a>

### .Net (C#)

| LVL | Lugar | Pregunta                                    | Question                                  | Indicio/Respuesta                                                                                                                                                     | Hint/Answer |
|:---:| ----- | ------------------------------------------- | ----------------------------------------- |---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  5  | HL    | CLR                                         | CLR                                       | Common Language Runtime: Improves runtime interactivity between programs, portability, security, cross-language integration                                           |
|  5  | L     | MSIL/CIL                                    | MSIL/CIL                                  | Microsoft Intermediate Language / Common Intermediate Language                                                                                                        |
|  5  | L     | CLI                                         | .Net Framework/.Net Core                  | Common Language Infrastructure                                                                                                                                        |
|  3  | HLU   | .Net Framework/.Net Core                    | .Net Framework/.Net Core                  |                                                                                                                                                                       |
|  3  | HLE   | Thread & Task                               | Thread & Task                             |                                                                                                                                                                       |
|  5  | E     | Programación Asíncrona                      | Programación Asíncrona                    | async, await, task                                                                                                                                                    | async, await, task
|  2  | HLE   | Delegate                                    | Delegate                                  | action & func                                                                                                                                                         |
|     | E     | Tipo de Delegados                           | Tipo de Delegados                         |  Tipo (Type) e Instancia (instance)                                                                                                                                   |
|  4  | E     | Delegado de tipo (delegate Type)            | Delegado de tipo (delegate Type)          | Un *delegate type* define un *protocolo* el cual el que lo llama y el objetivo van a confirmar, comprometiendo una lista de tipo de parámetros y un tipo de retorno   |
|  4  | E     | Delegado de instancia (delegate instance)   | Delegado de instancia (delegate instance) |  Un *delegate instance* es un tipo de objeto que se referencia a uno o mas métodos objetivos conformando un protocolo.                                                |
|  3  | E     | Action (delegate)                           | Action (delegate)                         | functions that do not return a value                                                                                                                                  |
|  2  | E     | Func (delegate)                             | Func (delegate)                           |                                                                                                                                                                       |
|  4  |       | Predicate                                   | Predicate                                 |                                                                                                                                                                       |
|  3  | E     | Extension method                            | Extension method                          |                                                                                                                                                                       |
|  3  | E     | Linq                                        | Linq                                      |                                                                                                                                                                       |
|  3  | E     | Lamba Expression                            | Lamba Expression                          |                                                                                                                                                                       |
|  4  |       | Dispose Finalize (IDisposable)              | Dispose Finalize (IDisposable)            |                                                                                                                                                                       |
|  4  |       | GC                                          | GC                                        |                                                                                                                                                                       |
|  5  |       | Generations                                 | Generations                               |                                                                                                                                                                       |
|  3  |       | Generics                                    | Generics                                  |                                                                                                                                                                       |
|  4  |       | Tuples                                      | Tuples                                    |                                                                                                                                                                       | Provide a simple way to store a set of values. The main purpose of tuples is to safely return multiple values from a method without resorting to **out** parameters (something you cannot do with anonymous types) |
|  4  |       | Unsafe code                                 | Unsafe code                               |                                                                                                                                                                       | Permitted to use pointer types and perform C++ style pointer operations on memory within that scope |
|  ?  |       | GC memory work                              | GC memory work                            |                                                                                                                                                                       |
|  ?  | E     | Caules IoC utilizas                         | Caules IoC utilizas                       |                                                                                                                                                                       |
|  ?  | UE    | Tipos de LifeTime en .Net Core IoC          | Tipos de LifeTime en .Net Core IoC        | AddSingleton, Transaction, AddScope                                                                                                                                   | AddSingleton, Transaction, AddScope
|  ?  | E     | Generic con contrains                       | Generic con contrains                     |                                                                                                                                                                       |
|  ?  | E     | Reflection                                  | Reflection                                |                                                                                                                                                                       |
|  3  | LUES  | Usos de reflection                          | Example of usage of Reflection            |                                                                                                                                                                       |
|  ?  | E     | Modificador de acceso por default           | Modificador de acceso por default         |                                                                                                                                                                       |
|  ?  | LE    | Librerias de IoC                            | Librerias de IoC                          |                                                                                                                                                                       |
|  2  | S     | Data Types                                  | Data Types                                | int, long, double, decimal, float, char, string, bool, byte, object, sbyte, short, uint, ulong, ushort                                                                |
|  2  | S     | Data Structure                              | Data Structure                            | Collecciones son el estandar que complementan los arrays, fuera de las arreglos, no cuenta con estructura de datos como otros lenguages que tienen tipo de estructuras de key-value. C# include un tipo comun de estructura que ayude a crear colecciones (System.Collection) |
|  1  | S     | Flow Control                                | Flow Control                              | if-else-, while, do-while, switch, for, foreach                                                                                                                       |

#### .NET Core

| LVL | Lugar | Pregunta                                          | Question                                        | Indicio/Respuesta                                                                              | Hint/Answer |
|:---:| ----- | ------------------------------------------------- | ----------------------------------------------- |----------------------------------------------------------------------------------------------- | ----------- |
|  4  | L     | Kestrel                                           | Kestrel                                         |                           |
|  3  | ULE   | Startup                                           | Startup                                         |                            |
|  1  | L     | Como se configura (diferencia con .Net framework) | How to configure (and diff with .Net framework  | Principla: Multiplataforma |


#### .NET Framework

| LVL | Lugar | Pregunta                                          | Question                                        | Indicio/Respuesta                                                                              | Hint/Answer |
|:---:| ----- | ------------------------------------------------- | ----------------------------------------------- |----------------------------------------------------------------------------------------------- | ----------- |
|     |       |                                                   |                                                 |                                                                                                |             |

<a href="#markdown-toc">regresar</a>

**Es demasiado**

| LVL | Lugar | Pregunta         | Question         | Indicio/Respuesta            | Hint/Answer                    |
|:---:| ----- | -----------------| -----------------|------------------------------| ------------------------------ |
| +5  |       | Integer literals | Integer literals | decimal, hexadecimal, binary | decimal, hexadecimal, binary   |

<a href="#markdown-toc">regresar</a>


**Data Types**

| Tipos   | Tamaño           |  Descripción                                       |
| ------- | ---------------- | -------------------------------------------------- |
| int     | 4 bytes          | almacena numeros de -2,147,483,648 a 2,147,483,647 |
| long    | 8 bytes          | |
| float   | 4 bytes          | internal representation base 2  |
| double  | 8 bytes          | internal representation base 2  |
| decimal |                  | internal representation base 10 lo que lo hace muy preciso |
| bool    | 1 bit            |
| char    | 2 bytes          |
| string  | 2 bytes por char | |

<a href="#markdown-toc">regresar</a>

### ASP.NET MVC

| LVL | Lugar | Pregunta                        | Question                      | Indicio/Respuesta             | Hint/Answer                   |
|:---:| ----- | ------------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
|  x  | H     | Workflow                        | Workflow                      |                               |                               |
|  X  | H     | Security                        | Security                      |                               |                               |
|  X  | H     | Filters                         | Filters                       |                               |                               |
|  X  | H     | Filters - Order                 | Filters - Order               |                               |                               |
|  X  | H     | Filters - Types                 | Filters - Types               |                               |                               |
|  X  | H     | Multiple Models                 | Multiple Models               |                               |                               |
|  X  | H     | Route (Core and Framework)      | Route (Core and Framework)    |                               |                               |
|  X  | H     | HttpVerbs                       | HttpVerbs                     |                               |                               |
|  X  | H     | RestAPI                         | RestAPI                       |                               |                               |
|  X  | H     | Assign Model                    | Assign Model                  |                               |                               |
|  X  | H     | Partial view                    | artial view                   |                               |                               |
|  X  | H     | ViewBag ViewData TempData       | ViewBag ViewData TempData     |                               |                               |

<a href="#markdown-toc">regresar</a>

### SOLID

| LVL | Lugar | Pregunta                                        | Question                                      | Indicio/Respuesta                                                                                                         | Hint/Answer                   |
|:---:| ----- | ----------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
|  X  | HL    | Single responsibility Principle                 | Single responsibility Principle               |                                                                                                                           | Gather toghter the things that change for the same reasons, Separete things that Change for different reason <br /> Tambien se puede decir que un object tiene una sola razon para cambiar |
|  X  | HL    | Open–Closed Principle                           | Open–Closed Principle                         |                                                                                                                           | A Module should be open for extension but closed for modification |
|  5  | HL    | Liskov Substitution Principle                   | Liskov Substitution Principle                 |                                                                                                                           | A program that uses an interface must no be confused by an implmentation of that interface <br /> Objectos de un programa deberian ser reemplazabes por instances de sus subtipos sin alterar el correcto funcionamiento del programa   |
|  5  | HL    | Interface Segregation Principle                 | Interface Segregation Principle               |                                                                                                                           | Keep interfaces small so that users don't end up depending on things they don't need <br /> Muchas interfaces cliente espeficicas son mejores que una interfaz de propósito general |
|  X  | HL    | Dependency Inversion Principle                  | Dependency Inversion Principle                |                                                                                                                           | Depend in the direction of abstraction. High level modules should not depend upon low level details <br /> La noción de que se debe "depender de abstracciones, no depender de implementaciones".       |
|  3  | E     | Caules OOP aplican a S                          | Which OOP can apply to S                      | No decir que solo tiene una responsabilidad <br /> se puede explicar mejor diciendo que solo tiene una razon para cambiar |
|  4  | E     | Caules OOP aplican a O                          | Which OOP can apply to O                      | Creo que con el Polimorfismo                                                                                              |
|  4  | E     | Caules OOP aplican a L                          | Which OOP can apply to L                      |                                                                                                                           |
|  4  | E     | Caules OOP aplican a I                          | Which OOP can apply to I                      |                                                                                                                           |
|  4  | E     | Caules OOP aplican a D                          | Which OOP can apply to D                      |                                                                                                                           |
|  4  | L     | Explica para que es el SOLID - no las nombres   | Explain SOLID benefit, no conceps and name    |                                                                                                                           |
|  3  | L     | Diferencia con Patrones de Diseño               | Difference with Design Patters                |                                                                                                                           |

<a href="#markdown-toc">regresar</a>

### Design Patterns

| LVL | Lugar | Pregunta                        | Question              | Indicio/Respuesta                                              | Hint/Answer                   |
|:---:| ----- | ------------------------------- | --------------------- | -------------------------------------------------------------- | ----------------------------- |
|  X  | HLE   | IoC                             | IoC                   |                                                                |
|  X  | HULE  | IoC Tipos de Scope              | IoC typo of scopes    | *Depende del lenguage. Ver en la parte del lenguage/Framework* |
|  X  | HULE  | IoC Liberias                    | IoC Libraries         | *Depende del lenguage. Ver en la parte del lenguage/Framework* |
|  X  | HL    | Singleton                       | Singleton             |                                                                |
|  X  | HL    | Dependency Injection            | ependency Injection   |                                                                |
|  X  | HL    | Factory                         | Factory               |                                                                |
|  X  | HL    | Observable                      | Observable            |                                                                |
|  X  | HL    | Creational patterns             | Creational patterns   |                                                                | These patterns are designed for class instantiation. They can be either class-creation patterns or object-creational patterns |
|  X  | HL    | Structural patterns             | Structural patterns   |                                                                | These patterns are designed with regard to a class' structure and composition. The main goal of most of these patterns is to increase the functionality of the class(es) involved, without changin much of its composition |
|  X  | HL    | Behavioral patterns             | Behavioral patterns   |                                                                | These patterns are designed depending on how one class communicates with others |

-----

|               | Creational | Structural | Behavioural |
| ------------- | ---------- | ---------- | ----------- |
| Comunes       | - Abstract Factory<br />- Builder<br />- Factory Method<br />- Prototype<br />- Singleton<br /> | - Adapter (Wrapper or Translator)<br />- Bridge<br />- Composite<br />- Decorator<br />- Facade<br />- Flyweight<br />- Proxy<br /> | - Chain of reponsability<br />- Command<br />- Interpreter<br />- Iterator<br />- Mediator<br />- Memento<br />- Observer (Publish/subscribe)<br />- State<br />- Strategy<br />- Template method<br />- Visitor<br /> |
| Menos comunes | - Lazy initialization<br />- Dependency Injection<br />- Multiton<br />- Object pool<br />- Resource acquisition is initialization<br /> | - Extension Object<br />- Front controller<br />- Marker<br />- Module<br />- Twin<br /> | - Blackboard<br />- Null object<br />- Servant<br />- Specification<br /> |

<a href="#markdown-toc">regresar</a>

### Javascript

> Las ligas llevan a paginas externas, en un futuro planea que llevan a secciones del blog.

| LVL | Lugar | Pregunta                                                                                                    | Question                                                                                                      | Indicio/Respuesta                                              | Hint/Answer                   |
|:---:| ----- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ----------------------------- |
|  ?  | H     | JS vs JQ   (Legacy ya no es muy necesaria)                                                                  | JS vs JQ (legacy)                                                                                             |
|  ?  | H     | ===                                                                                                         | ===                                                                                                           |
|  2  | HS    | [Tipos de datos](https://javascript.info/data-types)                                                        | [Data Types](https://javascript.info/data-types)                                                              | Number, String, Boolean, undefined, *bigInit*, *Symbol*, **null**, **object** |
|  2  | HS    | Tipos de Estructura                                                                                         | Structure Types                                                                                               | object, Function  |
|  ?  |       | Strcutural Root (Pagina de [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures))  | Strcutural Root (Pagina de [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures))    | null - La agregue porque esta en la pagina de moz como tipo objeto
|  3  |       | Ejemplo de Objects                                                                                          | Object Examples                                                                                               | Object, [Array](https://javascript.info/array-methods), [Map, Set](https://javascript.info/map-set), WeakMap, WeaSet, Date. Todo lo que va despues de **new** |
|  3  | S     | Flow Control                                                                                                | Flow Control                                                                                                  | While, Do-While, For, If-else, Switch |
|  3  |       | hasOwnProperty                                                                                              | hasOwnProperty                                                                                                |                       |
|  ?  | H     | typeof                                                                                                      | typeof                                                                                                        |                       |
|  ?  | H     | Json Array                                                                                                  | Json Array                                                                                                    |                       |
|  ?  | HL    | Let Var Const                                                                                               | Let Var Const                                                                                                 |                       |
|  ?  | HL    | Prototype                                                                                                   | Prototype                                                                                                     |                       |
|  ?  | HL    | Closure                                                                                                     | Closure                                                                                                       |                       |
|  ?  | H     | Hoisting                                                                                                    | Hoisting                                                                                                      |                       |
|  ?  | HU    | Scope                                                                                                       | Scope                                                                                                         |                       |
|  5  | S     | Programacion Asíncrona                                                                                      | Async Programing                                                                                              | Promises, async/await |
|  ?  | H     | Promises and callback                                                                                       | Promises and Callback                                                                                         |                       |
|  ?  | H     | Promise vs Observable                                                                                       | Promise vs Observable                                                                                         |                       |
|  ?  | H     | Multithreading                                                                                              | Multithreading                                                                                                |                       |
|  ?  |       | What is the Fetch method?                                                                                   | What is the Fetch method?                                                                                     |                       |
|  ?  | U     | LocalStorage vs SessionStorage                                                                              | LocalStorage vs SessionStorage                                                                                |                       |
|  ?  | H     | window vs document                                                                                          | window vs document                                                                                            |                       |

<a href="#markdown-toc">regresar</a>

### Angular

| LVL | Lugar | Pregunta                        | Question                | Indicio/Respuesta                                              | Hint/Answer                   |
|:---:| ----- | ------------------------------- | ----------------------- | -------------------------------------------------------------- | ----------------------------- |
|  5  |       | Components                      | Components              |
|  5  | U     | Directives                      | Directives              |
|  5  | U     | Attribute Directives            | Attribute Directives    |
|  5  |       | Structural Directives           | Structural Directives   |
|  5  | U     | Pipes                           | Pipes                   |
|  5  |       | Services                        | Services                |
|  5  |       | Routing                         | Routing                 |
|  5  |       | NgModule                        | NgModule                |
|  5  | U     | Angular Template                | Angular Template        |
|  5  |  U    | Modules                         | Modules                 |

<a href="#markdown-toc">regresar</a>

### ReactJS

| LVL | Lugar | Pregunta      | Question          | Indicio/Respuesta                                              | Hint/Answer                   |
|:---:| ----- | ------------- | ----------------- | -------------------------------------------------------------- | ----------------------------- |
|  ?  | S     | Ciclo de vida | lifecycle         |
|  ?  | S     | hooks         | hooks             |

<a href="#markdown-toc">regresar</a>

### TypeScript

| LVL | Lugar | Pregunta                        | Question          | Indicio/Respuesta                                              | Hint/Answer                   |
|:---:| ----- | ------------------------------- | ----------------- | -------------------------------------------------------------- | ----------------------------- |
|  X  |       | Decoradores                     | Decorators        |
|  X  |       | Fuertemente tipado              | Strongly-Type     |

<a href="#markdown-toc">regresar</a>

### Azure

```
    IaaS----------\
    |  PaaS-----\  |
    |  |        |  |
    |  |  SaaS  |  |
    |  |________|  |
    |______________|    
```

| LVL | Lugar | Pregunta                        | Question          | Indicio/Respuesta                                              | Hint/Answer                   |
|:---:| ----- | ------------------------------- | ----------------- | -------------------------------------------------------------- | ----------------------------- |
|  3  | L     | PaaS                            | PaaS              | Una plataforma compartida para los desarrolladores donde puede espedar su software. Es una capa abstracta de la infrastructura, asi los desarrolladores no necesitan preocuparse por la configuracion del servidor |
|  3  | L     | IaaS                            | IaaS              | Una infrastructura de hardware compartida donde el administador puede contruir infrastructuras de servicios, es decir, tiene mas control del sistema que el PaaS  |
|  1  |       | Ejemplos de SaaS                | Examples of SaaS  | Wordpress |
|  1  |       | Ejemplo de PaaS                 | Examples of PaaS  | Azure Web Apps |
|  2  |       | Ejemplo de IaaS                 | Examples of IaaS  | Azure VMs      |

### UNIT TEST

| LVL | Lugar | Pregunta             | Question          | Indicio/Respuesta                                              | Hint/Answer                   |
|:---:| ----- | ---------------------| ----------------- | -------------------------------------------------------------- | ----------------------------- |
|     |       | Librerias            | Libraries         |
|     |       | Mock                 | Mock               |

#### Unit Test - C#

| LVL | Lugar | Pregunta             | Question          | Indicio/Respuesta                                              | Hint/Answer                   |
|:---:| ----- | ---------------------| ----------------- | -------------------------------------------------------------- | ----------------------------- |
|     |       | XUnit Theory         | XUnit Theory      |
|     |       | XUnit Fact           | XUnit Fact        |

#### Unit Test - Javascript

| LVL | Lugar | Pregunta | Question | Indicio/Respuesta | Hint/Answer                   |
|:---:| ----- | -------- | ---------| ------------------| ----------------------------- |
|     |       |          |          |                   |                               |

### Base de Datos

#### SQL

| LVL | Lugar | Pregunta | Question | Indicio/Respuesta | Hint/Answer                   |
|:---:| ----- | -------- | ---------| ------------------| ----------------------------- |
|     |       |          |          |                   |                               |

#### CosmosDB

| LVL | Lugar | Pregunta | Question | Indicio/Respuesta | Hint/Answer                   |
|:---:| ----- | -------- | ---------| ------------------| ----------------------------- |
|     |       |          |          |                   |                               |

#### Entity Framework

| LVL | Lugar | Pregunta | Question | Indicio/Respuesta | Hint/Answer                   |
|:---:| ----- | -------- | ---------| ------------------| ----------------------------- |
|     |       |          |          |                   |                               |

### Arquitectura

| LVL | Lugar | Pregunta            | Question           | Indicio/Respuesta | Hint/Answer                   |
|:---:| ----- | ------------------- | ------------------ | ----------------- | ----------------------------- |
|     | L     | Arquitectura Onion  | Onion Architecture |                   |                               |

### AGILE Methodology
### Html
### Boostrap

| LVL | Lugar | Pregunta                | Question             | Indicio/Respuesta | Hint/Answer                   |
|:---:| ----- | ----------------------  | -------------------- | ----------------- | ----------------------------- |
|  1  |       | Cuantas columnas son    | How many columns use | 12                |

### Cloud

### RabbitMQ

### Identity Server

| LVL | Lugar | Pregunta          | Question            | Indicio/Respuesta | Hint/Answer                   |
|:---:| ----- | ----------------- | ------------------- | ----------------- | ----------------------------- |
|  1  |       | Client            | Client              |                   | A Client is a piece of software that requests tokens from IdentityServer - either for authenticationg a user or for accessing a resource
|  ?  |       | API Resource      | API Resource        |                   | APIs reousrces represent functionality a client want to invoke - typically modelled as Web APIs.
|     |       | Identity Resource | Identity Resource   |                   | Identity information (aka claims) about a user, e.g. name of email address.
|  ?  |       | Identity Token    | Identity Token      |                   | An identity token represents the outcome of an authentication process.
|  ?  |       | Access Token      | Acess Token         |                   | An access token allows access to an API Resource.



<script>
let lgEs = true;
// es
document.querySelectorAll("thead tr th:nth-child(3)").forEach((item, index) => {
    item.classList.add("lg-es-mx");
});
document.querySelectorAll("thead tr th:nth-child(5)").forEach((item, index) => {
    item.classList.add("lg-es-mx");
});
document.querySelectorAll("tbody tr td:nth-child(3)").forEach((item, index) => {
    item.classList.add("lg-es-mx");
});
document.querySelectorAll("tbody tr td:nth-child(5)").forEach((item, index) => {
    item.classList.add("lg-es-mx");
});

// us
document.querySelectorAll("thead tr th:nth-child(4)").forEach((item, index) => {
    item.classList.add("lg-en-us");
    item.classList.add("hide");
});
document.querySelectorAll("thead tr th:nth-child(6)").forEach((item, index) => {
    item.classList.add("lg-en-us");
    item.classList.add("hide");
});
document.querySelectorAll("tbody tr td:nth-child(4)").forEach((item, index) => {
    item.classList.add("lg-en-us");
    item.classList.add("hide");
});
document.querySelectorAll("tbody tr td:nth-child(6)").forEach((item, index) => {
    item.classList.add("lg-en-us");
    item.classList.add("hide");
});


switchES = () => { 
    document.querySelectorAll(".lg-en-us").forEach((item, inde) => {item.classList.add("hide")});
    document.querySelectorAll(".lg-es-mx").forEach((item, inde) => {item.classList.remove("hide")});
}

switchUS = () => { 
    document.querySelectorAll(".lg-en-us").forEach((item, inde) => {item.classList.remove("hide")});
    document.querySelectorAll(".lg-es-mx").forEach((item, inde) => {item.classList.add("hide")});
}

const checkboxLang = document.querySelector("#lang-switch");
checkboxLang.addEventListener('click', (e, i) => {
    console.log("lg", e, checkboxLang.checked);
    checkboxLang.checked ? switchUS() : switchES();
})

</script>
