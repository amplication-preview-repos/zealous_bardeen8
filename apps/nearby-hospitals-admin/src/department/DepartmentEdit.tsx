import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { DoctorTitle } from "../doctor/DoctorTitle";
import { HospitalTitle } from "../hospital/HospitalTitle";

export const DepartmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="doctor.id" reference="Doctor" label="Doctor">
          <SelectInput optionText={DoctorTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="doctors"
          reference="Doctor"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DoctorTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="hospital.id"
          reference="Hospital"
          label="Hospital"
        >
          <SelectInput optionText={HospitalTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="hospitals"
          reference="Hospital"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HospitalTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
