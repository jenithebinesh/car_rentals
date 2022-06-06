package com.postgresql;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
public class Delete {
    public static void main( String args[] ) {
        Connection c = null;
        Statement stmt = null;
        try {
            Class.forName("org.postgresql.Driver");
            c = DriverManager
                    .getConnection("jdbc:postgresql://localhost:5432/je_car_rentals",
                            "postgres", "Jenith@21");
            c.setAutoCommit(false);
            System.out.println("Opened database successfully");

            stmt = c.createStatement();
            String sql = "DELETE from users where ID = ;";
            stmt.executeUpdate(sql);
            c.commit();
            ResultSet rs = stmt.executeQuery( "SELECT * FROM users;" );
            while ( rs.next() ) {
                int id = rs.getInt("id");
                String  name = rs.getString("username");
                int age  = rs.getInt("password");
                System.out.println( "id = " + id );
                System.out.println( "username = " + "username");
                System.out.println( "password = " + "password" );
                System.out.println();
            }
            rs.close();
            stmt.close();
            c.close();
        } catch ( Exception e ) {
            System.err.println( e.getClass().getName()+": "+ e.getMessage() );
            System.exit(0);
        }
        System.out.println("Operation done successfully");
    }
}
