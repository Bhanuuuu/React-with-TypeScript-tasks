function greet(name:string, salutation?:string): string {
    return "Hello" + (salutation ? salutation : '') + name;
}

export default greet;