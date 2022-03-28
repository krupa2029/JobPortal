using EmployerModule.Models;
using EmployerModule.Pagination;

namespace EmployerModule.ResponseModels
{
    public class VacancyDetailRes
    {
        public int totalItem { get; set;}

        public Pagination<VacancyDetailModel> vacancyDetailModel { get; set;}
    }
}
