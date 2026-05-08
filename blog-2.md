How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

In static programming, developers often face a dilemma: create multiple versions of the same logic for different data types, or use a flexible but unsafe type like any. Generics solve this by allowing types to be passed as parameters. This enables the creation of components and functions that are "type-agnostic" during definition but "strictly typed" during execution, ensuring that the relationship between inputs and outputs remains same.

The core power of Generics is in their ability to understand a type at the moment of runtime. Unlike any, which removes type information, a Generic variable (typically denoted as <T>) acts as a placeholder that the compiler fills with the specific structure of the data being passed in.

Moreover, Generics allow for flexibility, and they also provide mechanisms to enforce strict requirements on the data structures. By using the extends keyword, a developer can ensure that a generic component only accepts data that contains specific properties, preventing runtime errors while maintaining reusability across different object shapes.

For example,

interface Identifiable {
id: string | number;
}

// This function works for Users, Products, or Orders,
// as long as they have an 'id' property.

function getRecordId<T extends Identifiable>(record: T): T["id"] {
return record.id;
}

Lastly, Generics act as a bridge between flexibility and safety. They allow developers to write dry, reusable code that scales across different data structures without ever sacrificing the strictness of the type system. By capturing and propagating types through a system, Generics eliminate the need for manual type casting and prevent the "type safety holes" associated with more permissive alternatives.
