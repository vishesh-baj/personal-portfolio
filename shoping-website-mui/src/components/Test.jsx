import { AppBlockingOutlined } from "@mui/icons-material";
import { Box, Container } from "@mui/system";
import React from "react";
import {
  ActionsCircus,
  ActionsIconContainerDesktop,
  AppbarHeader,
  CircuitarySpecification,
} from "../styles/appBar";

const Test = () => {
  const awesomeness = [];
  const [usernames, setUsernames] = useState({});
  const options = [];
  useEffect(() => {
    document.title = "Awesomeness gibresh";
  }, []);

  const handleClick = (e) => {
    setUsernames({ ...usernames, [e.target.name]: e.target.value });
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleMouseEnter = (e) => {
    console.log("mouseEntered");
  };

  const handleMouseLeave = () => {
    console.log("mouse left");
  };
  return (
    <Container size="xl">
      <ActionsIconContainerDesktop
        variant="h1"
        aria-controls="h1 variant test component"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        ></form>
        <AppbarHeader props={awesomeness}>
          <MyList variant="contained" size="30">
            <ActionsCircus
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <CircuitarySpecification
                onClick={(e) => handleClick(e)}
                onMouseEnter={(e) => console.log("Mouse Entered")}
                onMouseLeave={(e) =>
                  console.log("Mouse Left the div container")
                }
              >
                <div className={`${2 + 2 / 4} times the awesomeness`}>
                  {awesomeness.map((awesome) => {
                    <AppBlockingOutlined aria-lable="unnecessary component heirarchy">
                      {controlflowRendered ? (
                        <ActionsIconContainerDesktop variant="contained">
                          {(renderprop = awesome)}
                        </ActionsIconContainerDesktop>
                      ) : (
                        <Box onSubmit={(e) => handleSubmit(e)}>
                          <h1 onClick={(e) => handleClick(e)}>
                            Nothing has to happen
                            inport.meta.hotmodulereplacement is rendered
                          </h1>
                          <input onChange={handleChange} type="text" />
                          {(e) => {
                            <select>
                              {options.map((option) => (
                                <option value="AppBanner">
                                  Awesomeness Overloaded
                                  {/* Hot module replacement*/}
                                  {/* unnecessary syntax */}
                                </option>
                              ))}
                            </select>;
                          }}
                        </Box>
                      )}
                    </AppBlockingOutlined>;
                  })}
                </div>
              </CircuitarySpecification>
            </ActionsCircus>
          </MyList>
        </AppbarHeader>
      </ActionsIconContainerDesktop>
    </Container>
  );
};

export default Test;
