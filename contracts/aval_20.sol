    // SPDX-License-Identifier: MIT
    pragma solidity  ^0.8.9;

    import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

    contract aval_20 is ERC20{

        address public owner;
        uint public itemID = 0;

        struct items{

            uint id;
            string itemName;
            uint256 price;
        }

        modifier onlyOwner(){
            require(msg.sender == owner, "You are not the Owner");
            _;
        }

        items[] public redeem_items;


        constructor(string memory _name, string memory _symbol, address _owner)ERC20(_name,_symbol){

            owner = _owner;

        }

        function mint(address reciever, uint amount)
        public
        onlyOwner() {

            _mint(reciever, amount);

        }

        function burn(uint256 amount)
        public{

            super._burn(msg.sender, amount);

        }

    function transfer(address reciever, uint256 amount)
        public
        virtual 
        override
        returns(bool){

            return super.transfer(reciever, amount);

        }

        function getBalance(address _address)
        public
        view
        returns(uint256){
            return super.balanceOf(_address);
        }

        function addItems(string memory _name, uint256 _amount)
        public onlyOwner{

            items memory item =  items( itemID, _name, _amount);
            redeem_items.push(item);
            itemID += 1;
        }

        function getItems() public view returns(items[] memory){

            return redeem_items;

        }

        function redeemToken(uint  _id)
        public {

            uint price = redeem_items[_id].price;

            require (getBalance(msg.sender) >= price, "You don't have enough Tokens");
            transfer(address(this), price);
        }

        function withdraw()
        public onlyOwner{

            uint256 balance = getBalance(address(this));
            _transfer(address(this), owner, balance);
        }
        

    }