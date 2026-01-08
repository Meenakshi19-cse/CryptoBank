import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const RealModule = buildModule("RealModule",(m)=>{
    const real = m.contract("RealEstate");
    return {real};
})

export default RealModule;