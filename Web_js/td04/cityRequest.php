<?php

class Conf {
    
    private static $database = array(
        'hostname' => 'infolimon',
        'database' => 'etugagne',
        'login'    => 'etugagne',
        'password' => '123'
    );

    static public function getLogin() {
        return self::$database['login'];
    }

    static public function getHostname() {
        return self::$database['hostname'];
    }

    static public function getDatabase() {
        return self::$database['database'];
    }

    static public function getPassword() {
        return self::$database['password'];
    }

}

class Model {

    public static $pdo;

    public static function init_pdo() {
        $host   = Conf::getHostname();
        $dbname = Conf::getDatabase();
        $login  = Conf::getLogin();
        $pass   = Conf::getPassword();
        try {
            // connexion à la base de données            
            // le dernier argument sert à ce que toutes les chaines de charactères 
            // en entrée et sortie de MySql soit dans le codage UTF-8
            self::$pdo = new PDO("mysql:host=$host;dbname=$dbname", $login, $pass, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
            // on active le mode d'affichage des erreurs, et le lancement d'exception en cas d'erreur
            self::$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $ex) {
            echo $ex->getMessage();
            die("Problème lors de la connexion à la base de données.");
        }
    }

    public static function selectByName($name) {
        try {
            // préparation de la requête
            $sql = "SELECT * FROM cities WHERE name LIKE :name_tag LIMIT 5"; 
            $req_prep = self::$pdo->prepare($sql);
            // passage de la valeur de name_tag
            $values = array("name_tag" => $name."%");
            // exécution de la requête préparée
            $req_prep->execute($values);
            $req_prep->setFetchMode(PDO::FETCH_OBJ);
            $tabResults = $req_prep->fetchAll();
            // renvoi du tableau de résultats
            return $tabResults;
        } catch (PDOException $e) {
            echo $e->getMessage();
            die("Erreur lors de la recherche dans la base de données.");
        }
    }

}

// on initialise la connexion $pdo
Model::init_pdo();

// le reste est à compléter
$n = $_GET['city'];
$r = Model::selectByName($n);
echo json_encode($r);