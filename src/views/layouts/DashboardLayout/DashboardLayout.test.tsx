import { mount } from "enzyme";
import DashboardLayout from "./DashboardLayout";

describe("<DashboardLayout/>", () => {
    let dashboardLayout: any;
    beforeEach(() => dashboardLayout = mount(
        <DashboardLayout>
            <span>Hola Mundo!</span>
        </DashboardLayout>
    ));

    it("should show the text sent as children", () => {
        expect(dashboardLayout.text()).toEqual("Bienvenido(a) Dr(a). Anyi LozanoHola Mundo!");
    });
});