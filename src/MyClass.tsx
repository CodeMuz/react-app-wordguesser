import * as React from "react";

export interface InterfaceMyClassProps {
  name?: string;
  isMarried: boolean;
}

export interface InterfaceState {
  age: number;
}

class MyClass extends React.Component<InterfaceMyClassProps, InterfaceState> {
  
  public static defaultProps: Partial<InterfaceMyClassProps> = {
    name: "DEFAULT"
  };

  public state = {
    age: 21
  };

  constructor(props: any) {
    super(props);
    this.incrementAge();    
  }

  public render() {
    return (
      <div>
        <p> My name is {this.props.name}</p>
        <p> I am {this.state.age} years old</p>
      </div>
    );
  }

  private incrementAge() {
    setTimeout(() => {
      this.setState({
        age: this.state.age++
      });
    }, 1000);
  }
}

export default MyClass;
