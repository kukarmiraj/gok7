import { UserUpdateManyWithoutOrganisationsInput } from "./UserUpdateManyWithoutOrganisationsInput";

export type OrganisationUpdateInput = {
  name?: string | null;
  users?: UserUpdateManyWithoutOrganisationsInput;
};
