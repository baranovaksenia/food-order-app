import React from "react";
import styles from "./MealItemForm.module.css";

import Input from "./../../UI/Input";

function MealUtemForm(props) {
  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          max: "5",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
}

export default MealUtemForm;
