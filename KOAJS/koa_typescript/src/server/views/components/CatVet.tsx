import * as React from "react";
import { Cat } from "../../models/cat";
import CatVetForm from "./CatVetForm";
import { ICatVetFormProps } from "./interface/ICatVetFormProps";
export function CatVet(props: ICatVetFormProps) {
  return (
    <div className="card" style={{ width: 400, margin: "auto" }}>
      <div className="card-body">
        <h5 className="card-title">Cat Information</h5>
        <p className="card-text">
          <small>
            Please review {props.cat.name}'s information before submitting
          </small>
        </p>
        <CatVetForm cat={props.cat} />
      </div>
    </div>
  );
}
