using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EmployerModule.Migrations.VacancyRequest
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "VacancyRequests",
                columns: table => new
                {
                    requestId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    vacancyId = table.Column<int>(type: "int", nullable: false),
                    companyName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    jobTitle = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    applicantFirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    applicantLastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    jobSeekerEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    employerEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    status = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    appliedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VacancyRequests", x => x.requestId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "VacancyRequests");
        }
    }
}
