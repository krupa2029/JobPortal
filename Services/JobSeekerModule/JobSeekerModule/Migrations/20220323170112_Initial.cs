using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace JobSeekerModule.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "JobSeekerDetails",
                columns: table => new
                {
                    email = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    jobSeekerId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    firstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    lastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    phoneNumber = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    totalWorkExpericence = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    expectedSalary = table.Column<long>(type: "bigint", nullable: false),
                    dateOfBirth = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JobSeekerDetails", x => x.email);
                });

            migrationBuilder.CreateTable(
                name: "Experiences",
                columns: table => new
                {
                    experienceId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    companyName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    startDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    endDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    companyUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    designation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    jobDescription = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    jobSeekerEmail = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Experiences", x => x.experienceId);
                    table.ForeignKey(
                        name: "FK_Experiences_JobSeekerDetails_jobSeekerEmail",
                        column: x => x.jobSeekerEmail,
                        principalTable: "JobSeekerDetails",
                        principalColumn: "email",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Qualifications",
                columns: table => new
                {
                    qualificationId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    qualificationName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    university = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    yearOfCompletion = table.Column<int>(type: "int", nullable: false),
                    grade = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    jobSeekerEmail = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Qualifications", x => x.qualificationId);
                    table.ForeignKey(
                        name: "FK_Qualifications_JobSeekerDetails_jobSeekerEmail",
                        column: x => x.jobSeekerEmail,
                        principalTable: "JobSeekerDetails",
                        principalColumn: "email",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Experiences_jobSeekerEmail",
                table: "Experiences",
                column: "jobSeekerEmail");

            migrationBuilder.CreateIndex(
                name: "IX_JobSeekerDetails_email",
                table: "JobSeekerDetails",
                column: "email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Qualifications_jobSeekerEmail",
                table: "Qualifications",
                column: "jobSeekerEmail");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Experiences");

            migrationBuilder.DropTable(
                name: "Qualifications");

            migrationBuilder.DropTable(
                name: "JobSeekerDetails");
        }
    }
}
