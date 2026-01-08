import { expect } from "chai";
import hre from "hardhat";

describe("Bank", function () {
  let bank: any;
  let owner: any;
  let otherAccount: any;

  beforeEach(async function () {
    const Bank = await hre.ethers.getContractFactory("Bank");
    bank = await Bank.deploy();
    [owner, otherAccount] = await hre.ethers.getSigners();
  });

  describe("Deployment", function () {
    it("Should deploy successfully", async function () {
      expect(await bank.getAddress()).to.be.properAddress;
    });
  });

  describe("Deposit", function () {
    it("Should allow deposit and update balance", async function () {
      const depositAmount = hre.ethers.parseEther("1.0");
      await bank.deposit({ value: depositAmount });
      expect(await bank.getBalance()).to.equal(depositAmount);
    });

    it("Should revert if deposit amount is zero", async function () {
      await expect(bank.deposit({ value: 0 })).to.be.revertedWith(
        "Deposit amount must be greater than zero"
      );
    });
  });

  describe("Withdraw", function () {
    beforeEach(async function () {
      const depositAmount = hre.ethers.parseEther("2.0");
      await bank.deposit({ value: depositAmount });
    });

    it("Should allow withdrawal and update balance", async function () {
      const withdrawAmount = hre.ethers.parseEther("1.0");
      await bank.withdraw(withdrawAmount);
      expect(await bank.getBalance()).to.equal(hre.ethers.parseEther("1.0"));
    });

    it("Should revert if withdraw amount is zero", async function () {
      await expect(bank.withdraw(0)).to.be.revertedWith(
        "Withdraw amount must be greater than zero"
      );
    });

    it("Should revert if insufficient balance", async function () {
      const withdrawAmount = hre.ethers.parseEther("3.0");
      await expect(bank.withdraw(withdrawAmount)).to.be.revertedWith(
        "Insufficient balance"
      );
    });
  });

  describe("GetBalance", function () {
    it("Should return correct balance", async function () {
      expect(await bank.getBalance()).to.equal(0);
      const depositAmount = hre.ethers.parseEther("1.5");
      await bank.deposit({ value: depositAmount });
      expect(await bank.getBalance()).to.equal(depositAmount);
    });
  });
});
