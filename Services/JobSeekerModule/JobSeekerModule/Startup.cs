using JobSeeker.Contexts;
using JobSeekerModule.Repository.ExperienceRepo;
using JobSeekerModule.Repository.JobSeekerDetailRepo;
using JobSeekerModule.Repository.QualificationRepo;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace JobSeekerModule
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();

            services.AddDbContext<JobSeekerDetailContext>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("DbConnection")
            ));

            services.AddTransient<IJobSeekerDetailRepository, JobSeekerDetailRepository>();

            services.AddTransient<IQualificationsRepository, QualificationsRepository>();

            services.AddTransient<IExperienceRepository, ExperienceRepository>();

            //services.AddMvc().AddJsonOptions(o =>
            //{
            //    o.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.Preserve;
            //});



            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "JobSeekerModule", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "JobSeekerModule v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
