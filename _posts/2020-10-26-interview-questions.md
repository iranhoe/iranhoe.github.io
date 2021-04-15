---
layout: post
category: devblog
title: "Preguntas que hago para entrevistas"
---

## Estos son los temas que pregunto

{% include toc.md %}

Las preguntas estan en ingles porque lo normal es entrevistar en ingles
en alguna actualizacion cambiare eso a español e ingles.

### Desarrollador C-Sharp con Front-Ednd

#### OOP


| LVL | Lugar | Pregunta                       | Indicio                           |
|:---:| ----- |--------------------------------|-----------------------------------|
|  2  | HE    | Pillar of OOP                  | Inheritance, Polymorphism Encapsulation, Abstraction |
|  1  | HE    | Inheritance / Herencia         |                                   |
|  3  | HE    | Polimorfismo / Polymorphism    | Is the property in a programming language that allows objects of different types to be substituted for one another in program flow without needing to know ahead of time what the object's type. |
|  1  | HE    | Encapsulacion / Encapsulation  | Protective encasement that permits access to an object's data only via specifically assigned operations. |
|  2  | HE    | Abstraccion / Abstraction      | Showing only the essential attributes of something and hiding any implementation finromation that is unncessary to the user |
|  1  | E     | Ejemplo de Herencia            |
|  1  | HE    | Ejemplo de Polimorfismo        | Override y overloding son parte del polimorfismo |
|  1  | E     | Ejemplo de Encapsularon        |
|  1  | E     | Ejemplo de Abstracción         |
|  2  | H     | Abstract vs interface          |                                   |
|  3  | HLUE  | Modificadores de acceso        |                                   |
|  1  | E     | multi inheritance              |                                   |
|  2  | HUE   | overloading                    |                                   |
|  2  | HUE   | override                       |                                   |
|  2  | HE    | protect/private vs internal    |                                   |
|  3  | E     | struct                         |                                   |
|  2  | HE    | Reference Type                 | - Donde se guardan los objetos <br /> - Referencia de memoria <br > - Se almacena en el heap |
|  2  | HE    | Value Type                     | - Se libera automaticamente <br /> - vive en el Stack
|  3  | E     | Managed and Unmanaged Code     | Managed: compiler - unmanaged: os |
|  3  | E     | Memory                         | Heap & Stack, los dos se almacenan en la memoria RAM, son un concepto lógico. |
|  3  | E     | Memory: Heap                   | - Se libera manual: Se aloja con el new y se libera con el delete. <br /> - Es mas lento <br> It is the memory in which objects reside. Reference Types |
|  3  | E     | Memory: Stack                  | - Se libera automáticamente. <br /> - Es mas rapida <br /> - Se utiliza para almacenar valores, no punteros. <br /> Stack is a block of memory for storing local variables and parameters. Computer's Memory, Temprary Storage Memory |
|  3  | E     | Static class                   |                                   |
|  2  | E     | Donde se guarda el tipo Valor  | Se guardan en el stack            |
|  2  | E     | Donde se guarda el tipo de Ref | SE guardan en el Heap             |
|  2  | E     | Boxing y Unboxing              |                                   |

#### .Net Core (C#)

| LVL | Lugar | Pregunta                                    | Indicio |
|:---:| ----- | ------------------------------------------- |---------|
|  5  | HL    | CLR                                         | Common Language Runtime: Improves runtime interactivity between programs, portability, security, cross-language integration |
|  5  | L     | MSIL/CIL                                    | Microsoft Intermediate Language / Common Intermediate Language |
|  5  | L     | CLI                                         | Common Language Infrastructure |
| 3/5 | HLU   | .Net Framework/.Net Core                    |         |
| 4/5 | L     | Kestrel                                     |         |
| 3/5 | HLE   | Startup                                     |         |
| 3/5 | HLE   | Thread & Task                               |         |
|  5  | E     | Programación Asíncrona                      | async, await, task |
| 2/5 | HLE   | Delegate                                    | action & func |
|     | E     | Tipo de Delegados                           | Tipo (Type) e Instancia (instance) |
|  4  | E     | Delegado de tipo (delegate Type)            | Un *delegate type* define un *protocolo* el cual el que lo llama y el objetivo van a confirmar, comprometiendo una lista de tipo de parámetros y un tipo de retorno |
|  4  | E     | Delegado de instancia (delegate instance)   | Un *delegate instance* es un tipo de objeto que se referencia a uno o mas métodos objetivos conformando un protocolo.
| 3/5 |       | Action (delegate)                           | functions that do not return a value |
|  2  |       | Func (delegate)                             |         |
| 4/5 |       | Predicate                                   |         |
| 3/5 |       | Extension method                            |         |
| 3/5 |       | Linq                                        |         |
| 4/5 |       | Dispose Finalize (IDisposable)              |         |
| 4/5 |       | GC                                          |         |
| 5/5 |       | Generations                                 |         |
| 3/5 |       | Generics                                    |         |
| 4/5 |       | Tuples                                      | Provide a simple way to store a set of values. The main purpose of tuples is to safely return multiple values from a method without resorting to **out** parameters (something you cannot do with anonymous types) |
| 4   |       | Unsafe code                                 | Permitted to use pointer types and perform C++ style pointer operations on memory within that scope |
|  ?  |       | GC memory work                              |
|  ?  | E     | Caules IoC utilizas                         |
|  ?  | E     | Tipos de Scope en .Net Core IoC             | Singleton, Transaction

#### ASP.NET MVC

| LVL | Pregunta                       | Indicio |
|:---:|--------------------------------|---------|
| x/5 | Workflow                       |         |
| X/5 | Security                       |         |
| X/5 | Filters                        |         |
| X/5 | Filters - Order                |         |
| X/5 | Filters - Types                |         |
| X/5 | Multiple Models                |         |
| X/5 | Route (Core and Framework)     |         |
| X/5 | HttpVerbs                      |         |
| X/5 | RestAPI                        |         |
| X/5 | Assign Model                   |         |
| X/5 | Partial view                   |         |
| X/5 | ViewBag ViewData TempData      |         |

#### SOLID

| LVL | Lugar | Pregunta                       | Indicio |
|:---:| ----- |--------------------------------|---------|
| X/5 | HL    | Single responsibility          | Gather toghter the things that change for the same reasons, Separete things that Change for different reason <br /> Tambien se puede decir que un object tiene una sola razon para cambiar |
| X/5 | HL    | Open–closed                    | A Module should be open for extension but closed for modification |
| 5/5 | HL    | Liskov substitution            | A program that uses an interface must no be confused by an implmentation of that interface <br /> Objectos de un programa deberian ser reemplazabes por instances de sus subtipos sin alterar el correcto funcionamiento del programa   |
| 5/5 | HL    | Interface segregation          | Keep interfaces small so that users don't end up depending on things they don't need <br /> Muchas interfaces cliente espeficicas son mejores que una interfaz de propósito general |
| X/5 | HL    | Dependency inversion           | Depend in the direction of abstraction. High level modules should not depend upon low level details <br /> La noción de que se debe "depender de abstracciones, no depender de implementaciones".       |
|  ?  | E     | Caules OOP aplican a S         | 
|  ?  | E     | Caules OOP aplican a O         | Creo que con el Polimorfismo |
|  ?  | E     | Caules OOP aplican a L         |
|  ?  | E     | Caules OOP aplican a I         |
|  ?  | E     | Caules OOP aplican a D         |

#### Design Patterns

| LVL | Lugar | Pregunta             | Indicio |
|:---:| ----- | -------------------- | ------- |
| X/5 | HLE   | IoC                  |         |
| X/5 | HL    | Singleton            |         |
| X/5 | HL    | Dependency Injection |         |
| X/5 | HL    | Factory              |         |
| X/5 | HL    | Observable           |         |
| X/5 | HL    | Creational patterns  | These patterns are designed for class instantiation. They can be either class-creation patterns or object-creational patterns |
| X/5 | HL    | Structural patterns  | These patterns are designed with regard to a class' structure and composition. The main goal of most of these patterns is to increase the functionality of the class(es) involved, without changin much of its composition |
| X/5 | HL    | Behavioral patterns  | These patterns are designed depending on how one class communicates with others |

##### Creational

- Abstract Factory
- Builder
- Factory Method
- Prototype
- Singleton
- 
- Lazy initialization
- Dependency Injection
- Multiton
- Object pool
- Resource acquisition is initialization

##### Structural

- Adapter (Wrapper or Translator)
- Bridge
- Composite
- Decorator
- Facade
- Flyweight
- Proxy
- .
- Extension Object
- Front controller
- Marker
- Module
- Twin

##### Behavioural

- Chain of reponsability
- Command
- Interpreter
- Iterator
- Mediator
- Memento
- Observer (Publish/subscribe)
- State
- Strategy
- Template method
- Visitor
- .
- Blackboard
- Null object
- Servant
- Specification

#### Javascript

| LVL | Pregunta                       | Indicio |
|:---:| ------------------------------ | ------- |
| X/5 | JS vs JQ                       |         |
| X/5 | ===                            |         |
| X/5 | Data Types                     |         |
| X/5 | typeof                         |         |
| X/5 | Json Array                     |         |
| X/5 | Let Var Const                  |         |
| X/5 | Prototype                      |         |
| X/5 | Closure                        |         |
| X/5 | Hoisting                       |         |
| X/5 | Scope                          |         |
| X/5 | Promises and callback          |         |
| X/5 | Promise vs Observable          |         |
| X/5 | Multithreading                 |         |
| X/5 | What is the Fetch method?      |         |
| X/5 | LocalStorage vs SessionStorage |         |
| X/5 | window vs document             |         |

#### Angular

| LVL | Pregunta                | Indicio |
|:---:| ----------------------- | ------- |
| X/5 | Components              |         |
| X/5 | Directives              |         |
| X/5 | Attribute Directives    |         |
| X/5 | Structural Directives   |         |
| X/5 | Pipes                   |         |
| X/5 | Services                |         |
| X/5 | Routing                 |         |
| X/5 | NgModule                |         |
| X/5 | Angular Template        |         |

#### TypeScript

| LVL | Pregunta      | Indicio |
|:---:| ------------- | ------- |
| X/5 | Decorators    |         |
| X/5 | Strongly-Type |         |

#### Azure

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

#### UNIT TEST
#### AGILE Methodology
#### Html
#### Boostrap
#### Unit Testing
#### Cloud
