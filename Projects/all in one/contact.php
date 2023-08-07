

<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
 



    $conn = new mysqli('localhost','id20581721_pawanmortale111','Pavan2004@.com','id20581721_contact');
    if($conn->connect_error)
    {
        die('Connection Failed : ' .$conn->connect_error);
    }
    else
    {
        $stmt = $conn->prepare("insert into contact(name,email) values(?, ?)");
        $stmt->bind_param("ss",$name,$email);
        $stmt->execute();
        echo "Registration Successfully..";
        $stmt->close();
        $conn->close();

    }


?>
