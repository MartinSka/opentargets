import React, { useState } from "react";
import { Footer, HomeBox, PlotContainer, PlotContainerSection } from "ot-ui";
import Splash from "ot-ui/build/components/Splash";
import {
  Grid,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useGenes } from "./useGenes";
import { columns, externalLinks } from "../../constants";
import Row from "./Row";

const useStyles = makeStyles({
  wrapper: { position: "relative", padding: "24px" },
  tableWrapper: {
    overflowX: "auto",
  },
});

const usePlotStyles = makeStyles({
  plotContainer: {
    marginBottom: 0,
  },
});

const usePlotContainerStyles = makeStyles({
  plotContainerSection: {
    borderBottom: 0,
  },
});

const LungCarcioma = () => {
  const classes = useStyles();
  const plotClasses = usePlotStyles();
  const plotContainerClasses = usePlotContainerStyles();

  const { isLoading, error, data } = useGenes();

  const [activeIndex, setActiveIndex] = useState(null);

  const handleChange = (index) => {
    setActiveIndex((i) => (i === index ? null : index));
  };

  return (
    <>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.wrapper}
      >
        <Splash />
        <HomeBox name="Genetics">
          <PlotContainer
            error={error}
            loading={isLoading}
            classes={plotClasses}
          >
            <PlotContainerSection classes={plotContainerClasses}>
              <div className={classes.tableWrapper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      {columns.map(({ id, name }) => (
                        <TableCell key={id}>{name}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data?.data?.map((row, index) => (
                      <Row
                        {...row}
                        key={row.id}
                        onChange={() => handleChange(index)}
                        isActive={activeIndex === index}
                      />
                    ))}
                  </TableBody>
                </Table>
              </div>
            </PlotContainerSection>
          </PlotContainer>
        </HomeBox>
      </Grid>
      <Footer externalLinks={externalLinks}></Footer>
    </>
  );
};

export default LungCarcioma;
