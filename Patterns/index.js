// Command - https://www.youtube.com/watch?v=GQzfF5EMD7o
//      Pattern to store commands with an execute and undo method
//      Undo history. Calculator.

// Builder - https://www.youtube.com/watch?v=M7Xi1yO_s8E
//      Pattern to help build object classes without huge parameter signatures
//      Each property has a setter method and the class has a build method.

// Null Object - https://www.youtube.com/watch?v=D4Dja5WSZoA
//      Default value object instead of a null object that you have to always check for null
//      Ex: User accounts. Guest user for people without an account.
//      Create a NullUser class to mirror the User class
//      When the user is being looked up and isn't found, return the NullUser instead of a user.


// Singleton - https://www.youtube.com/watch?v=sJ-c3BA-Ypo
//      Single object that is shared and everything stored in one place. One instantiated once.
//      Stored state. Global to the application.
//      Harder to test and increases coupling and dependency across app. Hard to refactor.
//      Certain niche uses.
//          Logger class


// Decorator


// Adapter - https://www.youtube.com/watch?v=2PKQtcJjYvc
//      Aka Wrapper
//      Convert an input to a different type of output
//      Maps from one interface to a different interface
//      Good way to deprecate an old method by setting up an adapter to acces the old adaptee
//      Pass the adaptee through the adapter's constructor (DI).
//      Set a private adaptee from the constructor to access the concrete adaptee's methods 
//      Using composition. Other implementation is multiple inheritance.


// Facade - https://www.youtube.com/watch?v=fHPa5xzbpaA
//      https://www.youtube.com/watch?v=K4FkHVO5iac
//      Fetch
//      Centralize implementation into a core method or module
//      Easier to change from fetch to axios. Easier to refactor common code.


// Proxy


// 1 - Strategy - https://www.youtube.com/watch?v=v9ejT8FO-7I
//      Implement algorithms to a type. Add behaviors to a base type. Car, jet, airplane. Go Drive, Go fly, Go Fly Fast

// 2 - Observer - https://www.youtube.com/watch?v=_BpmfnqjgzQ
//      Event listener - notify subscribers in parallel
//      Chain of responsibility - notify in order until it is handled

// 3 - Decorator - https://www.youtube.com/watch?v=GCraGHx6gso
//      Wrapper - open/closed

// 4 - Factory Method - https://www.youtube.com/watch?v=EcFVTgRHJLM
//      Implementing a database connection. Subtypes provide the implementation.

// 5 - Abstract Factory - https://www.youtube.com/watch?v=v-GiuMmsXj4

// 6 - Singleton - https://www.youtube.com/watch?v=hUE_j6q0LTQ
//      Static class with a single responsibility that can be shared
//      One object of a particular class in your code
//      Flyweight pattern

// 7 - Command - https://www.youtube.com/watch?v=9qA5kw8dcSU

// 8 - Adapter - https://www.youtube.com/watch?v=2PKQtcJjYvc

// 9 - Facade - https://www.youtube.com/watch?v=K4FkHVO5iac

// 10 - Proxy - https://www.youtube.com/watch?v=NwaabHqPHeM

// 11 - Bridge - https://www.youtube.com/watch?v=F1YQ7YRjttI

// 12 - Structural Patterns - https://www.youtube.com/watch?v=lPsSL6_7NBg

// 13 - Template Method - https://www.youtube.com/watch?v=7ocpwK9uesw

// 14 - Composite - https://www.youtube.com/watch?v=EWDmWbJ4wRA

// 15 - Difference between Composite and Decorator - https://www.youtube.com/watch?v=EECfgFQ44Kg

// 16 - Iterator - https://www.youtube.com/watch?v=uNTNEfwYXhI

// 17 - State - https://www.youtube.com/watch?v=N12L5D78MAA

// 18 - Null Object - https://www.youtube.com/watch?v=rQ7BzfRz7OY

// SOLID
// Single Responsibility - https://www.youtube.com/watch?v=AEnePs2Evg0
//      A class or module should have a single reason to change

// Open/Closed - https://www.youtube.com/watch?v=DJF_sGOs2V4
//      Never rewrite code
//      Open/Closed principle states that a module should be open for extension, but closed for modification
//      DI - parameters of types that play roles. Strategy objects. Switching sorting methods.
//          Instead of modifying, write a new member, and inject it instead of the old one.
//          Only writing new code and then deleting old code
//      You should never modify your BUG FREE code but you should extend it with the mechanisms like inheritance, polymorphism, and patterns like strategy, decorator, etc.

// Liskov's Substitution - https://www.youtube.com/watch?v=ObHQHszbIcE
//      Subtype requirement. If a class S is a subtype of class T, then properties of T work for S.
//      Animal.CanSpeak->Cat->CanSpeak. Animal->Snail->CanNotSpeak (lower subtype has to match)

// Interface Segregation - https://www.youtube.com/watch?v=xahwVmf8itI
//      Better to have many small interfaces, rather than a few large interfaces 
//      Too many is better than too few
//      Favoring composition over inheritance
//      Favoring decpupling over coupling
//      Animal - eat, sleep, eat roles
//      Contravariance and Covariance, Preconditions, PostConditions, Invariance

// Dependency Inversion - https://www.youtube.com/watch?v=S9awxA1wNNY
//      Inversion is inverting the dependency. Injection is the specific act of injecting the dependency.
//      Constructor injection is performing dependency injection through the constructor of an object.
//      Parameter injection is performing DI through the parameters of an object.
//      Never coupling to a concretion but always coupling to an abstraction.
//      Be able to change instances of classes at runtime and not only compile time
//      Increases reusability of classes
//      Helps isolated unit testing
//      Injecting a mock that you have full control over
//      New Animal injecting a cat or dog speaking behavior to give it characteristics of that type of animal
