const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


async function testConnection() {
    try {
      // Perform a simple query to check the connection
      await prisma.$connect();
      console.log('Database connection successful');
    } catch (error) {
      console.error('Database connection failed', error);
    } finally {
      await prisma.$disconnect();
    }
  }

  testConnection()
module.exports= prisma