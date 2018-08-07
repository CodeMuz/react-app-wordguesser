import * as React from "react";

export interface InterfaceMyClassProps {
  name?: string;
  isMarried: boolean;
}

export interface InterfaceState {
  age: number;
  // color: {
  //   backgroundColor: string;
  // };
}

class MyClass extends React.Component<InterfaceMyClassProps, InterfaceState> {
  public static defaultProps: Partial<InterfaceMyClassProps> = {
    name: "Murray"
  };

  constructor(props: any) {
    super(props);
    this.incrementAge();

    this.state = {
      age: 21
      // color: { backgroundColor: "blue" }
    };
  }

  public render() {
    return (
      <div>
        <p> My name is {this.props.name}</p>
        <p>          
          I am {this.state.age} years old plus
        </p>
      </div>
    );
  }

  private incrementAge() {
    setInterval(() => {
      this.setState({
        age: this.state.age + 1
        // color: {
        //   backgroundColor:
        //     this.state.color.backgroundColor === "yellow" ? "red" : "yellow"
        // }
      });
    }, 1000);
  }
}

export default MyClass;
