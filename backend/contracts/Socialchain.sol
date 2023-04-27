//SPDX-License-Identifier:MIT
pragma solidity ^0.8.17;


contract Socialchain{

    uint256 public totalAccounts;

    address payable owner;

    constructor() payable{
        owner = payable(msg.sender);

    }

    struct Post{
        uint256 id;
        string title;
        string content;
        uint256 likes;
        uint256 dislikes;
        string image;
        Accounts account; 
    }

    Post[] public posts;


    struct Accounts{
        address owner;
        string username;
        string password;
        bool isAdvertiser;
    }


    struct Advertise{
        uint256 id;
        string heading;
        string content;
        uint256 reports;
        string image;
        Accounts account; 

    }

    Accounts[] public accounts;
    Advertise[] public advertises;

    event NewAccount(
        address indexed owner,
        string username,
        string password,
        bool isAdvertiser
    );

    event NewPost(
        uint256 id,
        string title,
        string content,
        uint256 likes,
        uint256 dislikes,
        string image,
        Accounts account
    );

    // mapping(Accounts => Post) postOwner;

    function postMessage(
        uint256 _id,
        string calldata _title, 
        string calldata _content,
        string calldata _image, 
        string calldata _username,
        string calldata _password
    ) external{

        posts.push(
            Post(
                _id,
                _title,
                _content,
                0,
                0,
                _image,
                Accounts(
                    msg.sender,
                    _username,
                    _password,
                    false
                )
            )
        );

        totalAccounts+=1;

        emit NewPost(
                _id,
                _title,
                _content,
                0,
                0,
                _image,
                Accounts(
                    msg.sender,
                    _username,
                    _password,
                    false
                )
        );


        accounts.push(Accounts(
            msg.sender,
            _username,
            _password,
            false
        ));

        emit NewAccount(
            msg.sender,
            _username,
            _password,
            false
        );

    }
    

    function getPost() public view returns(Post[] memory){
        return posts;
    }

    function likePost(uint256 _id) external{

        Post storage post = posts[_id];
        post.likes += 1;
    }

    function disLikePost(uint256 _id) external{
        Post storage post = posts[_id];
        post.dislikes += 1;
    }

    function postAdvertise(
        uint256 _id,
        string calldata _heading,
        string calldata _content,
        string calldata _image,
        string calldata _username,
        string calldata _password

    ) public payable {

        advertises.push(Advertise(
            _id,
            _heading,
            _content,
            0,
            _image,
            Accounts(
                msg.sender,
                _username,
                _password,
                true
            )
        ));
    }


    function reportPost(uint256 _id) external {
        Advertise storage advertise = advertises[_id];
        advertise.reports+=1;
    }

    modifier onlyOwner{
        require(msg.sender == owner, "Not the owner");
        _;
    }

    function getBalance() public view onlyOwner returns(uint256)  {
        return address(this).balance;
    }

    function withDraw() external onlyOwner{
        (bool sent,) = owner.call{value : address(this).balance}("");
        require(sent, "Can't withdrwathe money");
    }

    function getOwner() public view returns(address){
        return owner;
    }
}
    