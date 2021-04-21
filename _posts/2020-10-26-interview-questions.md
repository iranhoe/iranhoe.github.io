---
layout: post
category: devblog
title: "Preguntas que hago para entrevistas"
---

## Estos son los temas que pregunto

> NOTA: No saber algo LVL 1 es mas malo que no saber algo de LVL 5, esto es muy a criterio.  
> Ejemplo fallar 1/10 preguntas de LVL 1 de OOP no es malo, Fallar 9/10  ya responder solo de LVL 5 puede interpretarse como que solo se busco términos rapidos sin fundamentos.  

> NOTA: Agrego una columna para ingles, Mi intención es ayudar a la gente que aun no domina el ingles. Por otra parte creo que también ayudaría ver la diferencia de explicar un tópico en español e ingles.

{% include toc.md %}

Las preguntas estan en ingles porque lo normal es entrevistar en ingles
en alguna actualizacion cambiare eso a español e ingles.

### OOP


| LVL | Lugar | Pregunta                                    | Indicio                                                                                        | Ingles |
|:---:| ----- | ------------------------------------------- |----------------------------------------------------------------------------------------------- | ------ |
|  2  | HE    | Pillar of OOP                               | Herencia, Polimorfismo, Encapsulacion, Abstraccion.                                            | Inheritance, Polymorphism Encapsulation, Abstraction |
|  1  | HE    | Inheritance / Herencia                      |                                                                                                | Ability to crate new abstractions based on existing abstractions (classes) by deriving the existing behaviour we can re-use, extend or modify the base class. |
|  3  | HE    | Polimorfismo / Polymorphism                 |                                                                                                | Is the property in a programming language that allows objects of different types to be substituted for one another in program flow without needing to know ahead of time what the object's type. |
|  1  | HE    | Encapsulacion / Encapsulation               |                                                                                                | Protective encasement that permits access to an object's data only via specifically assigned operations. |
|  2  | HE    | Abstraccion / Abstraction                   |                                                                                                | Showing only the essential attributes of something and hiding any implementation finromation that is unncessary to the user |
|  1  | E     | Ejemplo de Herencia                         |                                                                                                | A subclass extending a superclass |
|  1  | HE    | Ejemplo de Polimorfismo                     | Override y overloding son parte del polimorfismo, upcasting y downcasting también              | |
|  1  | E     | Ejemplo de Encapsularon                     |                                                                                                | private fields, props (getter and setters), encapsulate what varies principle |
|  1  | E     | Ejemplo de Abstracción                      |                                                                                                | Create private methods to hide implementation details, abstract out functions and methods that are common across multiple instances and create a single generalized concept |
|  2  | H     | Abstract vs interface                       |                                                                                                | Abstract is used for the inherit chain, Interface defines a contract that must be implemented, abstract classes can have base implementation, interfaces usually only have props and methods definition (C# 8.0 allows interface default methods implementations) |
|  3  | HLUE  | Modificadores de acceso                     |                                                                                                | **public**: type or member can be accessed from anywhere <br /> **private**: type or member can be only accessed within the same class <br /> **protected**: type or member can be accessed within the same class or a deriving class <br /> **internal**: type or member can be accessed anywhere in the declaring assembly <br /> **private protected**: can be accessed only in the declaring assembly by code in the same class or a derived one <br /> **protected internal**: can be accessed only in declaring assembly, or by a deriving class in another assembly. |
|  1  | E     | multi inheritance                           |                                                                                                | C# does not allow mutiple inheritance through classes, we must implement multiple interfaces, see [deadly diamond of death problem](https://en.wikipedia.org/wiki/Multiple_inheritance#The_diamond_problem) |
|  2  | HUE   | override/sobre-escritura                    |                                                                                                | Declare a **virtual** method in a base class, then use **override** modifier in child class method, that way we modifiy the existing behavior (polymorphism) |
|  2  | HUE   | overloading/sobrecarga                      |                                                                                                | Declare several methods with almost same signature except for parameters number or type |
|  2  | HE    | protect/private vs internal                 | ver modificadores de acceso                                                                    | |
|  3  | E     | struct                                      |                                                                                                | Value type akin to a class where you can encapsulate data and related functionality |
|  2  | HE    | Reference Type                              | - Donde se guardan los objetos <br /> - Referencia de memoria <br > - Se almacena en el heap   |
|  2  | HE    | Value Type                                  | - Se libera automaticamente <br /> - vive en el Stack                                          |
|  3  | E     | Managed and Unmanaged Code                  |                                                                                                | Managed: compiler - unmanaged: os |
|  3  | E     | Memory                                      | Heap & Stack, los dos se almacenan en la memoria RAM, son un concepto lógico.                  |
|  3  | E     | Memory: Heap                                | - Se libera manual: Se aloja con el new y se libera con el delete. <br /> - Es mas lento <br> Memoria en la que residen los objetos. Tipo por referencia | It is the memory in which objects reside. Reference Types |
|  3  | E     | Memory: Stack                               | - Se libera automáticamente. <br /> - Es mas rapida <br /> - Se utiliza para almacenar valores, no punteros. <br /> Stack es un bloque de memoria para almacenar variables locales y parametros. Memoria de la computadora, Memoria Temporal | Stack is a block of memory for storing local variables and parameters. Computer's Memory, Temprary Storage Memory
|  3  | E     | Static class                                |                                   | Signature modifier that indicates all members should be static, that is, you don't need to create an instance of the class to reference that member
|  2  | E     | Donde se guarda el tipo Valor               | Se guardan en el stack            |
|  2  | E     | Donde se guarda el tipo de Ref              | SE guardan en el Heap             |
|  5  | E     | Boxing                                      | Boxing es el acto de hacer cas a un **value type** aun **reference type**, puede *reference type* puede ser un objecto clase o una interfaz. <br /> Ejemplo C#: <br /> ``` int = 123; ``` <br /> ``` object o = i; \\ boxing ``` |
|  5  | E     | Unboxing                                    | ``` 0 = 123; ``` <br /> ``` i = (int)o;  \\ unboxing```
|  ?  | E     | Clase abstracta                             | Son placeholder para la implementación de clases reales <br /> no pueden ser instanciadas.
|  ?  | E     | Diferencia clase abstracta y una clase      | Las clases regulares todos los métodos están completamente implementados, una clase abstracta sus funciones no estan definidas (son abstractas).
|  2  | L     | Constructor Clases abstractas               | |
|  3  |       | Upcasting (polymorphsim)                    | Utillizar una subclase en un metodo o statement que espera su super clase o interfaz:<br />Supongamos que Dog: Animal, entonces es posible:<br /> ``` Animal huesos = new Dog(); ```<br />y tambien: <br />```Dog huesos = new Dog();``` <br />```trainer.FeedAnimal(huesos) //Si espera un objeto tipo Animal```
|  3  |       | Downcasting (polymorphism)                  | Utilizar una referencia upcasteada previamente y regresarla a su tipo original  *Operacion costosa en tiempo de ejecucion, ejemplo: <br />```void FeedAnimal(Animal animal){``` <br />``` if(animal is Dog){ ``` <br />```  Dog dog = animal as Dog; ``` <br />``` } ``` |
|  5  |       | Covariance and contravariance               | | Enable implicit reference conversion for array types, delegate types, and generic tpye arguments:<br />```Ienumerable<string> strings = new List<string>();```<br />```Ienumerable<object> objects = strings;```<br /><br />Contravariance:<br />```Action<object> actObject = SetObject;```<br />```Action<string> actString = actObject;```

<a href="#markdown-toc">regresar</a>

### .Net Core (C#)

| LVL | Lugar | Pregunta                                    | Indicio |
|:---:| ----- | ------------------------------------------- |---------|
|  5  | HL    | CLR                                         | Common Language Runtime: Improves runtime interactivity between programs, portability, security, cross-language integration |
|  5  | L     | MSIL/CIL                                    | Microsoft Intermediate Language / Common Intermediate Language |
|  5  | L     | CLI                                         | Common Language Infrastructure |
|  3  | HLU   | .Net Framework/.Net Core                    |         |
|  4  | L     | Kestrel                                     |         |
|  3  | HLE   | Startup                                     |         |
|  3  | HLE   | Thread & Task                               |         |
|  5  | E     | Programación Asíncrona                      | async, await, task |
|  2  | HLE   | Delegate                                    | action & func |
|     | E     | Tipo de Delegados                           | Tipo (Type) e Instancia (instance) |
|  4  | E     | Delegado de tipo (delegate Type)            | Un *delegate type* define un *protocolo* el cual el que lo llama y el objetivo van a confirmar, comprometiendo una lista de tipo de parámetros y un tipo de retorno |
|  4  | E     | Delegado de instancia (delegate instance)   | Un *delegate instance* es un tipo de objeto que se referencia a uno o mas métodos objetivos conformando un protocolo.
|  3  | E     | Action (delegate)                           | functions that do not return a value |
|  2  | E     | Func (delegate)                             |         |
|  4  |       | Predicate                                   |         |
|  3  | E     | Extension method                            |         |
|  3  | E     | Linq                                        |         |
|  3  | E     | Lamba Expression                            |         |
|  4  |       | Dispose Finalize (IDisposable)              |         |
|  4  |       | GC                                          |         |
|  5  |       | Generations                                 |         |
|  3  |       | Generics                                    |         |
|  4  |       | Tuples                                      | Provide a simple way to store a set of values. The main purpose of tuples is to safely return multiple values from a method without resorting to **out** parameters (something you cannot do with anonymous types) |
|  4  |       | Unsafe code                                 | Permitted to use pointer types and perform C++ style pointer operations on memory within that scope |
|  ?  |       | GC memory work                              |
|  ?  | E     | Caules IoC utilizas                         |
|  ?  | E     | Tipos de LifeTime en .Net Core IoC          | AddSingleton, Transaction
|  ?  | E     | Generic con contrains                       |
|  ?  | E     | Reflection                                  |
|  ?  | E     | Modificador de acceso por default           | |
|  ?  | LE    | Librerias de IoC                            | |
|  2  | S     | Data Types                                  | int, long, double, decimal, float, char, string, bool, byte, object, sbyte, short, uint, ulong, ushort |
|  2  | S     | Data Structure                              | Collecciones son el estandar que complementan los arrays, fuera de las arreglos, no cuenta con estructura de datos como otros lenguages que tienen tipo de estructuras de key-value. C# include un tipo comun de estructura que ayude a crear colecciones (System.Collection) |
|  1  | S     | Flow Control                                | if-else-, while, do-while, switch, for, foreach

<a href="#markdown-toc">regresar</a>

**Es demasiado**

| LVL | Lugar | Pregunta         | Indicio                      |
|:---:| ----- | -----------------| ---------------------------- |
| +5  |       | Integer literals | decimal, hexadecimal, binary |

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

| LVL | Pregunta                       | Indicio |
|:---:|--------------------------------|---------|
|  x  | Workflow                       |         |
|  X  | Security                       |         |
|  X  | Filters                        |         |
|  X  | Filters - Order                |         |
|  X  | Filters - Types                |         |
|  X  | Multiple Models                |         |
|  X  | Route (Core and Framework)     |         |
|  X  | HttpVerbs                      |         |
|  X  | RestAPI                        |         |
|  X  | Assign Model                   |         |
|  X  | Partial view                   |         |
|  X  | ViewBag ViewData TempData      |         |

<a href="#markdown-toc">regresar</a>

### SOLID

| LVL | Lugar | Pregunta                       | Indicio |
|:---:| ----- |--------------------------------|---------|
|  X  | HL    | Single responsibility          | Gather toghter the things that change for the same reasons, Separete things that Change for different reason <br /> Tambien se puede decir que un object tiene una sola razon para cambiar |
|  X  | HL    | Open–closed                    | A Module should be open for extension but closed for modification |
|  5  | HL    | Liskov substitution            | A program that uses an interface must no be confused by an implmentation of that interface <br /> Objectos de un programa deberian ser reemplazabes por instances de sus subtipos sin alterar el correcto funcionamiento del programa   |
|  5  | HL    | Interface segregation          | Keep interfaces small so that users don't end up depending on things they don't need <br /> Muchas interfaces cliente espeficicas son mejores que una interfaz de propósito general |
|  X  | HL    | Dependency inversion           | Depend in the direction of abstraction. High level modules should not depend upon low level details <br /> La noción de que se debe "depender de abstracciones, no depender de implementaciones".       |
|  3  | E     | Caules OOP aplican a S         | No decir que solo tiene una responsabilidad <br /> se puede explicar mejor diciendo que solo tiene una razon para cambiar |
|  4  | E     | Caules OOP aplican a O         | Creo que con el Polimorfismo |
|  4  | E     | Caules OOP aplican a L         |        |
|  4  | E     | Caules OOP aplican a I         |        |
|  4  | E     | Caules OOP aplican a D         |        |
|  4  | L     | Explica para que es el SOLID - no las nombres |

<a href="#markdown-toc">regresar</a>

### Design Patterns

| LVL | Lugar | Pregunta             | Indicio |
|:---:| ----- | -------------------- | ------- |
|  X  | HLE   | IoC                  |         |
|  X  | HL    | Singleton            |         |
|  X  | HL    | Dependency Injection |         |
|  X  | HL    | Factory              |         |
|  X  | HL    | Observable           |         |
|  X  | HL    | Creational patterns  | These patterns are designed for class instantiation. They can be either class-creation patterns or object-creational patterns |
|  X  | HL    | Structural patterns  | These patterns are designed with regard to a class' structure and composition. The main goal of most of these patterns is to increase the functionality of the class(es) involved, without changin much of its composition |
|  X  | HL    | Behavioral patterns  | These patterns are designed depending on how one class communicates with others |

-----

|               | Creational | Structural | Behavioural |
| ------------- | ---------- | ---------- | ----------- |
| Comunes       | - Abstract Factory<br />- Builder<br />- Factory Method<br />- Prototype<br />- Singleton<br /> | - Adapter (Wrapper or Translator)<br />- Bridge<br />- Composite<br />- Decorator<br />- Facade<br />- Flyweight<br />- Proxy<br /> | - Chain of reponsability<br />- Command<br />- Interpreter<br />- Iterator<br />- Mediator<br />- Memento<br />- Observer (Publish/subscribe)<br />- State<br />- Strategy<br />- Template method<br />- Visitor<br /> |
| Menos comunes | - Lazy initialization<br />- Dependency Injection<br />- Multiton<br />- Object pool<br />- Resource acquisition is initialization<br /> | - Extension Object<br />- Front controller<br />- Marker<br />- Module<br />- Twin<br /> | - Blackboard<br />- Null object<br />- Servant<br />- Specification<br /> |

<a href="#markdown-toc">regresar</a>

### Javascript

> Las ligas llevan a paginas externas, en un futuro planea que llevan a secciones del blog.

| LVL | Lugar | Pregunta                        | Indicio |
|:---:| ----- | ------------------------------- | ------- |
|  ?  | H     | JS vs JQ                        |         |
|  ?  | H     | ===                             |         |
|  2  | HS    | [Data Types](https://javascript.info/data-types) | Number, String, Boolean, undefined, *bigInit*, *Symbol*, **null**, **object** |
|  2  | HS    | Strcuture Types                 | object, Function |
|  ?  |       | Strcutural Root (Pagina de [MDZ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)) | null - La agregue porque esta en la pagina de moz como tipo objeto
|  3  |       | Ejemplo de Objects              | Object, [Array](https://javascript.info/array-methods), [Map, Set](https://javascript.info/map-set), WeakMap, WeaSet, Date. Todo lo que va despues de **new** |
|  3  | S     | Flow Control                    | While, Do-While, For, If-else, Switch |
|  3  |       | hasOwnProperty                  |         |
|  ?  | H     | typeof                          |         |
|  ?  | H     | Json Array                      |         |
|  ?  | HL    | Let Var Const                   |         |
|  ?  | HL    | Prototype                       |         |
|  ?  | HL    | Closure                         |         |
|  ?  | H     | Hoisting                        |         |
|  ?  | HU    | Scope                           |         |
|  5  | S     | Programacion Asíncrona          | Promises, async/await |
|  5  | 
|  ?  | H     | Promises and callback           |         |
|  ?  | H     | Promise vs Observable           |         |
|  ?  | H     | Multithreading                  |         |
|  ?  |       | What is the Fetch method?       |         |
|  ?  | U     | LocalStorage vs SessionStorage  |         |
|  ?  | H     | window vs document              |         |

<a href="#markdown-toc">regresar</a>

### Angular

| LVL | Lugar | Pregunta                | Indicio |
|:---:| ----- | ----------------------- | ------- |
|  5  |       | Components              |         |
|  5  | U     | Directives              |         |
|  5  | U     | Attribute Directives    |         |
|  5  |       | Structural Directives   |         |
|  5  | U     | Pipes                   |         |
|  5  |       | Services                |         |
|  5  |       | Routing                 |         |
|  5  |       | NgModule                |         |
|  5  | U     | Angular Template        |         |

<a href="#markdown-toc">regresar</a>

### ReactJS

| LVL | Lugar | Pregunta                  | Indicio |
|:---:| ----- | ------------------------- | ------- |
|  ?  | S     | Ciclo de vida (lifecycle) |         |
|  ?  | S     | hooks                     |         |

<a href="#markdown-toc">regresar</a>

### TypeScript

| LVL | Pregunta      | Indicio |
|:---:| ------------- | ------- |
|  X  | Decorators    |         |
|  X  | Strongly-Type |         |

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

| LVL | Lugar | Pregunta             | Indicio |
|:---:| ----- | -------------------- | ------- |
|  3  | L     | PaaS                 | Una plataforma compartida para los desarrolladores donde puede espedar su software. Es una capa abstracta de la infrastructura, asi los desarrolladores no necesitan preocuparse por la configuracion del servidor |
|  3  | L     | IaaS                 | Una infrastructura de hardware compartida donde el administador puede contruir infrastructuras de servicios, es decir, tiene mas control del sistema que el PaaS  |
|  1  |       | Ejemplos de SaaS     | Wordpress |
|  1  |       | Ejemplo de PaaS      | Azure Web Apps |
|  2  |       | Ejemplo de IaaS      | Azure VMs      |

### UNIT TEST
### AGILE Methodology
### Html
### Boostrap
### Unit Testing
### Cloud
