"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";
import { toast } from "sonner";
import { useEffect } from "react";
import Header from "@/components/common/header/dashboard/Header";
import SidebarMenu from "@/components/common/header/dashboard/SidebarMenu";
import MobileMenu from "@/components/common/header/MobileMenu";

function NuevaPropiedadPage() {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      titulo: "",
      descripcion: "",
    },
  });
  const router = useRouter();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {

    console.log(data);
    const res = await axios.post(`/api/mis-propiedades`, data);
    console.log(res);

    if (!params.propiedadId) {
      const res = await axios.post(`/api/mis-propiedades`, data);
      if (res.status === 201) {
        router.push(`/dashboard`);
        router.refresh();
      }
    } else {
      const res = await axios.put(`/api/mis-propiedades/${params.propiedadId}`, data);
      if (res.status === 200) {
        router.push(`/dashboard`);
        router.refresh();
      }
    }
  });

  const handleDelete = async (propiedadId) => {
    console.log(propiedadId);
    const res = await axios.delete(`/api/propiedades/${propiedadId}`);

    if (res.status === 200) {
      toast.success("Project deleted successfully");
    }

    router.push(`/dashboard`);
    router.refresh();
  };

  useEffect(() => {
    if (params.propiedadId) {
      axios.get(`/api/mis-propiedades/${params.propiedadId}`).then((res) => {
        console.log(res);
        setValue("titulo", res.data.titulo);
        setValue("descripcion", res.data.descripcion);
      });
    }
  }, [params.propiedadId, setValue]);

  return (
    <>
      <Header />
      <MobileMenu />

      <div className="dashboard_sidebar_menu">
        <div
          className="offcanvas offcanvas-dashboard offcanvas-start"
          tabIndex="-1"
          id="DashboardOffcanvasMenu"
          data-bs-scroll="true"
        >
          <SidebarMenu />
        </div>
      </div>

      <section className="our-dashbord dashbord bgc-f7 pb50">
        <div className="container-fluid ovh">
          <div className="row">
            <div>
              <div className="container p-3 md:p-0 h-screen flex items-center justify-center">
                <div className="card w-full p-7 bg-white shadow-md rounded-lg">
                  <form className="flex flex-col gap-y-2" onSubmit={onSubmit}>
                    <h1 className="text-2xl font-bold">
                      {params.propiedadId ? "Editar Propiedad" : "Nueva Propiedad"}
                    </h1>
                    
                    <label>Project Title</label>
                    <input
                      type="text"
                      className="border rounded p-2"
                      placeholder="Project Title"
                      {...register("titulo")}
                    />

                    <label>Project Description</label>
                    <textarea
                      className="border rounded p-2"
                      placeholder="Project Description"
                      {...register("descripcion")}
                    />

                    <button
                      type="submit"
                      className="bg-blue-500 text-white p-2 rounded mt-4"
                    >
                      {params.propiedadId ? "Edit Project" : "Create Project"}
                    </button>
                  </form>

                  {params.propiedadId && (
                    <div className="flex justify-end my-4">
                      <button
                        onClick={() => handleDelete(params.propiedadId)}
                        className="bg-red-500 text-white p-2 rounded flex items-center gap-1"
                      >
                        🗑️ Delete Project
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="row mt50">
            <div className="col-lg-12">
              <div className="copyright-widget text-center">
                <p>© 2024 MLS Propiedades.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NuevaPropiedadPage;
