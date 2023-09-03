/*
  Warnings:

  - You are about to drop the `CourseToPrerequisite` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `academic_departments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `academic_faculty` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `academic_semesters` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `buildings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `course_faculties` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `courses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `faculties` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `rooms` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `semester_registrations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `students` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CourseToPrerequisite" DROP CONSTRAINT "CourseToPrerequisite_courseId_fkey";

-- DropForeignKey
ALTER TABLE "CourseToPrerequisite" DROP CONSTRAINT "CourseToPrerequisite_preRequisiteId_fkey";

-- DropForeignKey
ALTER TABLE "academic_departments" DROP CONSTRAINT "academic_departments_academicFacultyId_fkey";

-- DropForeignKey
ALTER TABLE "course_faculties" DROP CONSTRAINT "course_faculties_courseId_fkey";

-- DropForeignKey
ALTER TABLE "course_faculties" DROP CONSTRAINT "course_faculties_facultyId_fkey";

-- DropForeignKey
ALTER TABLE "faculties" DROP CONSTRAINT "faculties_academicDepartmentId_fkey";

-- DropForeignKey
ALTER TABLE "faculties" DROP CONSTRAINT "faculties_academicFacultyId_fkey";

-- DropForeignKey
ALTER TABLE "rooms" DROP CONSTRAINT "rooms_buildingId_fkey";

-- DropForeignKey
ALTER TABLE "semester_registrations" DROP CONSTRAINT "semester_registrations_academicSemesterId_fkey";

-- DropForeignKey
ALTER TABLE "students" DROP CONSTRAINT "students_academicDepartmentId_fkey";

-- DropForeignKey
ALTER TABLE "students" DROP CONSTRAINT "students_academicFacultyId_fkey";

-- DropForeignKey
ALTER TABLE "students" DROP CONSTRAINT "students_academicSemesterId_fkey";

-- DropTable
DROP TABLE "CourseToPrerequisite";

-- DropTable
DROP TABLE "academic_departments";

-- DropTable
DROP TABLE "academic_faculty";

-- DropTable
DROP TABLE "academic_semesters";

-- DropTable
DROP TABLE "buildings";

-- DropTable
DROP TABLE "course_faculties";

-- DropTable
DROP TABLE "courses";

-- DropTable
DROP TABLE "faculties";

-- DropTable
DROP TABLE "rooms";

-- DropTable
DROP TABLE "semester_registrations";

-- DropTable
DROP TABLE "students";

-- DropEnum
DROP TYPE "SemesterRegistrationStatus";

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "contactNo" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "profileImg" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
