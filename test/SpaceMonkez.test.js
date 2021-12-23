const SpaceMonkez = artifacts.require("./SpaceMonkez");

contract("SpaceMonkez", (accounts) => {
    let contract;
    before(async () => {
        contract = await SpaceMonkez.deployed();
    });
    describe("Deployment", async () => {
        it("Should deploy successfully", async () => {
            const address = contract.address;
            assert.notEqual(address, "");
            assert.notEqual(address, null);
            assert.notEqual(address, undefined);
            assert.notEqual(address, 0x0);
        });
        it("Name match", async () => {
            const name = await contract.name();
            assert.equal(name, "SpaceMonke");
        });
        it("Symbol match", async () => {
            const symbol = await contract.symbol();
            assert.equal(symbol, "SMKZ");
        });
    });
    describe("Minting", async () => {
        it("Should create a new token", async () => {
            const result = await contract.mint("https...1");
            const totalSupply = await contract.totalSupply();
            const event = result.logs[0].args;
            assert.equal(totalSupply, 1);
            assert.equal(
                event._from,
                "0x0000000000000000000000000000000000000000",
                "From contract"
            );
            assert.equal(event._to, accounts[0], "to msg.sender");
        });
    });
    describe("Indexing", async () => {
        it("Should iterate through token total supply", async () => {
            await contract.mint("https...1");
            await contract.mint("https...2");
            await contract.mint("https...3");
            const totalSupply = await contract.totalSupply();
            let result = [];
            let SpaceMonke;
            for (i = 1; i <= totalSupply; i++) {
                SpaceMonke = await contract.spaceMonkez(i - 1);
                result.push(SpaceMonke);
            }
        });
    });
});
