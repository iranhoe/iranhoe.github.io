---
layout: post
category: devblog
title: "Entendiendo Azure portal"
---

Para entrar a azure es bueno tener conocimiento de los nombres y como navegar dentro de el. Asi en futuros trabajos con Azure estarás mas familiarizado con los términos y no te perderás tanto entre lecturas.

## [{% include link.html %}](#blades)Blades

Las paginas Servicios/Recursos en el Portal de Azure en algunas ocasiones son referidas como *blades*. Cuando abres una pagina de Service Health por ejemplo estas abriendo el blade de Service Health.

Azure Portal usa los blades como un tipo de patrón de navegación, abre un blade a la derecha con cada servicio cada que vas adentrando en el. Es muy similar a la forma de navegación llamada breadcrumb (miga de pan) conforme navegas horizontalmente.

![breadcrumb](/assets/images/breadcrumb.png)

## [{% include link.html %}](#explorar-el-portal-de-azure-y-su-tablero-dashboard)Explorar el Portal de Azure y su Tablero (Dashboard)

### [{% include link.html %}](#crear-favoritos-y-acomodarlos)Crear favoritos y acomodarlos

> Cuando agregas un objeto a tus favoritos, este es agregado a la parte final de la lista de favoritos en el menu de Azure portal.

### [{% include link.html %}](#barra-de-herramientas)Barra de Herramientas

1. La barra de herramientas toma todo el ancho de la venta.

    En adición con el icono de hamburger menu a la izquierda de esta barra de herramientas hay algunos items que puede ser de ayuda.

    Primero, podrás notar que tienes herramienta *Buscador de recursos (Search resources)* que puedes utilizar para encontrar un recursos partícula rápidamente.

    Al lado derecho de la herramienta de búsqueda hay algunos botones que probé acceso a herramientas comunes. Con el cursor sobre el botón se mostrara el nombre del botón.

   - El botón _Cloud Shell_ abre una consola con auntenticacion directo en la ventana del portal que puedes utilizar para manejar los recursos de Azure. El Azure Cloud Shell soporta Bash y PowerShell

    ![Azure Cloud Shell](/assets/images/azure_cloud_shell_icon_toolbar.png)

   - El botón _Directory + Subscriptions_ abre un panel al lado derecho de la ventana que puedes utilizar para administrar tu suscripción de Azure y el directorio de cuentas (El mecanismos de autenticación de Azure Active Directory)

    ![Azure Directory + Subscriptions Pane](/assets/images/directory_plus_subscription_pane.png)

    - El botón de _notificaciones_ que abre el panel de notificaciones. El panel de notificación es de ayuda cuando estas trabajando en procesos que corren por mucho tiempo. Puedes monitoriar las notificaciones cuando creas o configuras recursos.

    ![Boton de notificaciones](/assets/images/notification_icon_toolbar_and_pane.png)

    - Ademas hay botones para Configuración (Settings), Help (Ayuda), y Feedback (sugerencias). El botón de Ayuda contiene un enlace a la documentación de ayuda y una lista de atajos de teclado que pueden ser de ayuda.

    ![iconos de configuracion, ayuda y sugerencias](/assets/images/setting_help_feedback_icon_toolbar.png)

    En la esquina derecha esta el botón para la información de cuenta, probé un acceso a cosas como tu contraseña e información de facturación.

2. En la barra de herramientas, haz clic en **Ayuda (help)** y despues clic en **Ayuda + Soporte (Help + support)**

3. En el balde de **Ayuda + soporte (Help + support)**, notaras que hay 4 recuadros para *Empezando (Get started), Documentación (Documentation), Aprender acerca de facturación(Learn about billing) y Plan de soporte (Support Plan)*

    ![Ayuda + Soporte](/assets/images/help_support_tiles.png)

    el balde Ayuda y soporte da acceso a mucho recursos. Tal vez quieres revisar esto después.

4. En el blade **Ayuda + soporte (Help + support)**, haz click en **Aprender acerca de facturación (Learn about billing)**

    Una nueva pestaña del navegador deberá abrirse y mostrar la documentación de facturación de Azure.

5. Tomate un momento para examinar el contenido de la página **Prevención de cargos inesperados con la administración de costos y facturación de Azure (Prevent unexpected charges with Azure billing and cost management)**

    Si _tu_ estas usando una suscripción de Azure de pago y tu eres responsable de la facturación (tu eres el administrador de la cuenta)m tu puedes poner una alerta para ayudar a manejar los pagos.

## [{% include link.html %}](#personalizar-tablero-de-azure-y-grupo-de-recursos)Personalizar Tablero de Azure y Grupo de Recursos

> Azure Dashboard and Resource Group

### [{% include link.html %}](#crearuntablero)Crear un Table (Dashboard)

1. Si es necesario, abre tu navegador y navega al portal de Azure. Puedes utilizar el siguiente link para abrir el portal de Azure: [Azure Portal](https://portal.azure.com)

2. En el menu del Portal de Azure, haz clic en **Table (Dashboard)**

### [{% include link.html %}](#crear-un-grupo-de-recursos-y agregar-recursos-a-tu-table)Crear un grupo de recursos y agregar recursos a tu Table

## [{% include link.html %}](#referencias)Referencias

- https://microsoftlearning.github.io/AZ-220-Microsoft-Azure-IoT-Developer/Instructions/Labs/LAB_AK_01-getting-started-with-azure.html