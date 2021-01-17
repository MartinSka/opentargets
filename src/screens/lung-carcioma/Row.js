import React from "react";
import { TableRow, TableCell, IconButton, Collapse } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import BarChart from "./BarChart";
import RadarChart from "./RadarChart";
import GraphWrapper from "./GraphWrapper";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  cell: (isActive) => ({
    padding: 0,
    borderBottomWidth: isActive ? 1 : 0,
  }),
  expandedRow: { height: "auto" },
});

const Row = ({ target, association_score, onChange, isActive }) => {
  const classes = useStyles(isActive);

  return (
    <>
      <TableRow>
        <TableCell padding="checkbox">
          <IconButton aria-label="Show details" onClick={onChange}>
            {isActive ? <Remove /> : <Add />}
          </IconButton>
        </TableCell>
        <TableCell padding="checkbox">{target.gene_info.symbol}</TableCell>
        <TableCell padding="checkbox">{target.id}</TableCell>
        <TableCell padding="checkbox">{target.gene_info.name}</TableCell>
        <TableCell padding="checkbox">{association_score.overall}</TableCell>
      </TableRow>
      <TableRow className={classes.expandedRow}>
        <TableCell colSpan={5} className={classes.cell}>
          <Collapse in={isActive} timeout="auto" unmountOnExit>
            <GraphWrapper datatypes={association_score.datatypes}>
              <BarChart />
              <RadarChart />
            </GraphWrapper>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default Row;
