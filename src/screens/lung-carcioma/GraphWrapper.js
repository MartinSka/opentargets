import React, { useState, cloneElement, Children } from "react";
import { makeStyles } from "@material-ui/styles";
import Measure from "react-measure";

const useStyles = makeStyles({
  wrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "16px",
    padding: "24px 0",
  },
});

const GraphWrapper = ({ datatypes, children }) => {
  const classes = useStyles();
  const [width, setWidth] = useState();

  const data = Object.entries(datatypes).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div className={classes.wrapper}>
      {Children.map(children, (child) => (
        <Measure bounds onResize={({ bounds }) => setWidth(bounds.width)}>
          {({ measureRef }) => (
            <div
              ref={measureRef}
              style={{ width: width || "auto", height: width / 2 || "auto" }}
            >
              {cloneElement(child, { data, width, height: width / 2 })}
            </div>
          )}
        </Measure>
      ))}
    </div>
  );
};

export default GraphWrapper;
