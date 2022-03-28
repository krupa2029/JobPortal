using Microsoft.EntityFrameworkCore.Migrations;

namespace EmployerModule.Migrations
{
    public partial class Update1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EmployerDetails",
                columns: table => new
                {
                    employerId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    createdBy = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    organizationName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    orgnizationType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    companyEmail = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    companyPhone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    noOfEmployees = table.Column<int>(type: "int", nullable: false),
                    startYear = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    about = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployerDetails", x => x.employerId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_EmployerDetails_companyEmail",
                table: "EmployerDetails",
                column: "companyEmail",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_EmployerDetails_createdBy",
                table: "EmployerDetails",
                column: "createdBy",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EmployerDetails");
        }
    }
}
