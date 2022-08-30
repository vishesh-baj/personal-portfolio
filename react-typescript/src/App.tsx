import Button from "./components/Button";
import Container from "./components/Container";
import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { userContextProvider } from "./components/context/UserContext";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
const App = () => {
  const personName = { first: "Bruce", last: "Wayne" };
  // personlist object is specified for the database required fovr the upscale model of the whne i was done dying my conscience regained so i begin my strufggle anf nothingness strained out of flash made of time my new form blasted out and it started me so and I burst out a shout at which wmy legs went frantic like bugs from a nest and I ran untill drained leaving no chouce but rest so I fell asleep softly at the wdge of a cave but I shouldve gone deeper but I am not so brave I Say hey yaa yaa hey yaa yaa hey, I woke up to see that theres two mighty steads wth their moughts chirning wildly expressing my deeds, as they put my head over and laid down to file I dont need to fear there's nothing to hide.

  // person list specific to the corrosponding component
  const personList = [
    { first: "Bruce", last: "Wayne" },
    { first: "Clark", last: "Kent" },
    { first: "Princess", last: "Diana" },
  ];

  return (
    <>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      {/* <Greet name="Vishesh" isLoading={false} />
      <Person name={personName} />
      <PersonList names={personList} />
      <Status status="success" />
      <Oscar>
        <Heading>Placeholder text</Heading>
      </Oscar>
      <Greet name="Vishesh" />
      <Button handleClick={(event) => console.log("Button Clicked", event)} />
      <Input value="" handleChange={(e) => console.log(e)} />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} /> */}
    </>
  );
};

export default App;
