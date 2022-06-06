import { mount } from "enzyme"
import Dashboard from "./Dashboard"

describe("<Dashboard/>", () => {
    let dashboardComponent: any = mount(<Dashboard/>);
    it("Must show the percent", () => {
        expect(dashboardComponent.text()).toEqual("MódulosAvance Proceso20%CertificadoRecuerde:Avance Proceso10%");
    })
})