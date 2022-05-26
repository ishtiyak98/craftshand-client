import React from "react";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import solved from "../../Assets/solved.png";

const Blogs = () => {
  return (
    <section>
      <Navbar></Navbar>
      <div className="py-12 px-6 lg:py-24 lg:px-24 bg-slate-100 space-y-12">
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl">
              How will you improve the performance of a React Application??
            </h2>
            <p>
              React can render faster and optimized UI by using its own clever
              techniques. However also there are some scopes to improve the
              performance. Some of them are:
              <li>
                Using immutable data structure: This maintain the proper flow of
                data as immutable data objects are easy to create, test, and
                use. Also, it can prevent temporal coupling.
              </li>
              <li>By avoiding using index as Key for map.</li>
              <li>Using production mode flag in webpack</li>
              <li>By doing dependency optimization.</li>
              <li>
                Using react fragments to avoid extra HTML element wrappers.{" "}
              </li>
            </p>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl">
              What are the different ways to manage a state in a React
              application?
            </h2>
            <p>
              State is a hook which can contain information about the component.
              The update of a state is asynchronous. There are many ways to
              manage states in a react app. Some of them are:
            </p>
            <li>
              Hooks : useState() method is used to store and manage local state.
            </li>
            <li>Context API : manage globally for react DOM tree. </li>
            <li>
              Apollo Link State : helps to customize the flow of data between
              Apollo Client and your GraphQL server.
            </li>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl">
              How does prototypical inheritance work?
            </h2>
            <p>
              Prototypical inheritance allows us to add methods and properties
              to objects. The ability to access object properties from one
              object to another object is referred as prototype inheritance.
              Prototypical inheritance can be accessed by __proto__property. The
              __proto__ property holds a reference to the object we defined as
              the prototype. The Object.prototype is on top of the prototype
              inheritance chain. Date objects, Array objects, and Player objects
              all inherit from Object.prototype.
            </p>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl">
              Why you do not set the state directly in React? For example, if
              you have const [products, setProducts] = useState([]). Why you do
              not set products = [...] instead, you use the setProducts.
            </h2>
            <p>
              In react we cannot modify react state directly. The state is not
              changed instantly when we directly update the state. It generates
              a pending state transition. Also, in react state is immutable.
              When react re-render its component, react compares the old state
              with the updated state. This procedure will be hampered if the
              state is changed immediately. As a result, the component will give
              unusual errors. As a result, we shouldn't directly change the
              value of a state.
            </p>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl">
              You have an array of products. Each product has a name, price,
              description, etc. How will you implement a search to find products
              by name?
            </h2>
            <p>
              Here products is an array of objects and we have to use find
              methods to show the desired search result. The solution of that
              problem is giving below.
              <br />
              <img src={solved} alt="" />
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Blogs;
