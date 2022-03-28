using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EmployerModule.Migrations.VacancyDetail
{
    public partial class Update1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "VacancyDetails",
                columns: table => new
                {
                    jobId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    publisherEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    companyName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    jobTitle = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    jobType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    jobLocation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    publishedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    noOfVacancies = table.Column<int>(type: "int", nullable: false),
                    minimumQualification = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    jobDescription = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    experienceRequired = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    minSalary = table.Column<long>(type: "bigint", nullable: false),
                    maxSalary = table.Column<long>(type: "bigint", nullable: false),
                    lastDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VacancyDetails", x => x.jobId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "VacancyDetails");
        }
    }
}
