package com.postgresql;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class Insert {
    public static void main(String args[]) {
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
            String sql = "INSERT INTO users (id,username,password) "
                    + "VALUES ( 2,'user2', 1234 );";
            stmt.executeUpdate(sql);

            stmt.close();
            c.commit();
            c.close();
        } catch (Exception e) {
            System.err.println( e.getClass().getName()+": "+ e.getMessage() );
            System.exit(0);
        }
        System.out.println("Records created successfully");
    }
}
