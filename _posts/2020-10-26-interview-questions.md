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


| LVL | Pregunta                       | Indicio                           |
|:---:|--------------------------------|-----------------------------------|
| 2/5 | Pillar of OOP                  |                                   |
| 1/5 | Inheritance / Herencia         |                                   |
| 3/5 | Polymorphismo                  |                                   |
| 1/5 | Encapsulation                  |                                   |
| 2/5 | Abstraction                    |                                   |
| 2/5 | Abstract vs interface          |                                   |
| 1/5 | multi inheritance              |                                   |
| 2/5 | override vs overloading        |                                   |
| 2/5 | protect vs internal            |                                   |
| 3/5 | struct                         |                                   |
| 2/5 | Value Type and Ref             |                                   |
| 3/5 | Managed and Unmanaged Code     | Managed: compiler - unmanaged: os |
| 3/5 | Memory                         | Heap & Stack                      |
| 3/5 | Memory: Heap                   |                                   |
| 3/5 | Memory: Stack                  |                                   |
| 3/5 | Static class                   |                                   |


#### .Net Core (C#)

| LVL | Pregunta                       | Indicio |
|:---:|--------------------------------|---------|
| 3/5 | .Net Framework/.Net Core       |         |
| 4/5 | Kestrel                        |         |
| 3/5 | Startup                        |         |
| 3/5 | Thread & Task                  |         |
| 2/5 | Delegate                       |         |
| 3/5 | Action, Func                   |         |
| 4/5 | Predicate                      |         |
| 3/5 | Extension method               |         |
| 3/5 | Linq                           |         |
| 4/5 | Dispose Finalize (IDisposable) |         |
| 4/5 | GC                             |         |
| 5/5 | Generations                    |         |
| 3/5 | Generics                       |         |
| 4/5 | Tuples                         |         |

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

| LVL | Pregunta                       | Indicio |
|:---:|--------------------------------|---------|
| X/5 | Single responsibility          | Gather toghter the things that change for the same reasons, Separete things that Change for different reason <br /> Tambien se puede decir que un object tiene una sola razon para cambiar |
| X/5 | Open–closed                    | A Module should be open for extension but closed for modification |
| 5/5 | Liskov substitution            | A program that uses an interface must no be confused by an implmentation of that interface <br /> Objectos de un programa deberian ser reemplazabes por instances de sus subtipos sin alterar el correcto funcionamiento del programa   |
| 5/5 | Interface segregation          | Keep interfaces small so that users don't end up depending on things they don't need <br /> Muchas interfaces cliente espeficicas son mejores que una interfaz de propósito general |
| X/5 | Dependency inversion           |  Depend in the direction of abstraction. High level modules should not depend upon low level details <br /> La noción de que se debe "depender de abstracciones, no depender de implementaciones".       |

#### Design Patterns

| LVL | Pregunta             | Indicio |
|:---:| -------------------- | ------- |
| X/5 | IoC                  |         |
| X/5 | Singleton            |         |
| X/5 | Dependency Injection |         |
| X/5 | Factory              |         |
| X/5 | Observable           |         |
| X/5 | Creational patterns  | These patterns are designed for class instantiation. They can be either class-creation patterns or object-creational patterns |
| X/5 | Structural patterns  | These patterns are designed with regard to a class' structure and composition. The main goal of most of these patterns is to increase the functionality of the class(es) involved, without changin much of its composition |
| X/5 | Behavioral patterns  | These patterns are designed depending on how one class communicates with others |

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

#### UNIT TEST
#### AGILE Methodology
#### Html
#### Boostrap
#### Unit Testing
#### Cloud
