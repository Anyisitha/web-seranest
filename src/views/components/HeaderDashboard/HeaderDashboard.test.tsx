import useControllers from "controllers";
import { mount, render, shallow } from "enzyme";
import HeaderDashboard from "./HeaderDashboard";

/** Controllers */
const { useGeneralHooks } = useControllers();
const { useAssets } = useGeneralHooks();
const { rocheLogo } = useAssets();

describe("<HeaderDashboard/>", () => {
    
    it("should have the same rendered image.", () => {
        let headerDashboard: any = mount(<HeaderDashboard />);
        expect(headerDashboard.find("#logo").prop("src")).toEqual(rocheLogo);
    });
});