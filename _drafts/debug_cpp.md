---
layout: post
title: "Debug C++"
---

En este post hablare de como hacer debugging (Depuración) de C++ con sus distintos compiladores en Visual Studio Code y Visual Studio 2019.

Los compiladores a utilizar serán las versiones de GNU, LLVM y de Microsoft en la un ambiente de Windows.

## Instalacion

Empezaremos por la instalación de los 3 compiladores mencionados mas arriba.

### GNU (CPP, G++, GCC)

> Casi todas las versiones de linux tienen pre-instalado con el, por lo que no sera un problema.

gcc probiende de GNU Compiler Collection y GDB is el depurador de GNU. Para instalar estos dos paquetes es necesario ir la sitio de MinGW (Minimalist GNU for Windows) y descargar la version para Windows. enlace al sitio de [mingw-w64](http://mingw-w64.org/doku.php/start) y enlace de descarga directa [aqui](https://sourceforge.net/projects/mingw-w64/files/Toolchains%20targetting%20Win32/Personal%20Builds/mingw-builds/installer/mingw-w64-install.exe/download).

> El sitio oficial tambien es http://www.mingw.org/ pero no esta funcionando para cuando escribi este post

Una vez descargado:

1. Correr el instalador
2. Para **Architecture** seleccionar **x84_64** y entonces precionar **Next**
3. En la pagina **Insallation Folder**, utilizar el directorio predeterminado. Copia la localizacion ya que sera necesaria después.
4. Precionar **Next** y empezara la instalación.

Después tendremos que agregar el path del direcion bin de Mingw-w64 a la variable de ambiente de Windows **PATH**

1. En la barra de busqueda de windows escribe **configuracion** (settings) y abre Windows Settings
2. Busca por **Variables de ambiente para tu cuenta** (Edit environment variables for your account)
3. Elige la variable **Path** y selecciona Editar (Edit)
4. En la nueva ventana, selecciona Nuevo (new) y agrega el directorio destino de Mingw-w64. La ubicaciones exacta depende de la version de Mingw-w64 que instalaste. Si usaste la version x86_64 la ubicasion sera **C:\Program Files\mingw-w64\x86_64-8.1.0-posix-seh-rt_v6-rev0\mingw64\bin**
5. Presiona OK para guarda y actualizar el PATH. Si tienes una consola de windows o similar abierta sera necesario reabrir para que el nuevo PATH este disponible.

#### Verificar instalacion

Para verificar las herramientas de Mingw-w64 fueron instaladas correctamente y estan disponibles, abre una new ventana de commands o powershell y escribe

``` bash
g++ --version
gdb --version
```

### LLVM (clang)

LLVM es una collecion modular y compilador reusable. El nombre actualemte no tiene significado pero nació de la idea de Virtual Machine. Para tener el compilador c++ de LLVM (clang) es necesario instalar LLVM, lo puedes descargar de su sitio de lanzamientos [releases.llvm.org](https://releases.llvm.org/)

Para el momento de este post la version actual de LLVM es la 11.0.0 de 12 de Octubre del 2020.

La instalacion es muy sencilla, una vez descargado el instalador:

1. ejecuta el instalador.
2. Acepta los términos y condiciones.
3. En la siguiente seccion, seleciona agregar a todos los usuario o a tu usuario actual la variable de ambiente y presiona siguiente.
4. Selecciona el directorio de instalacion y presiona siguiente. 
5. Despues selecciona instalar.

#### Verificar la instalacion

``` bash
clang --version
```

## Archivo de prueba

Utilizaremos un archivo muy pequeño para las pruebas, el objetivo sera que compile y poder hacer depuración.

```cpp
int main()
{
    return 0;
}
```

## Katas y Preguntas

1. que otro comando importante de GNU esta disponible dentro de la capeta bin de mingw64-64
2. Que significan las iniciales gcc
3. Cual es la diferencia de gcc y no g++
4. Porque es necesario agregar la ubicación de Wingw-w64 a la variable de windows PATH?
5. Porque no es necesario agregar los otros compiladores al PATH?

### Respuestas

1. gcc
2. GNU Compiler Collection
3. la repuesta pude ser extensa, pero en pocas palabras g++ incluye parametros que gcc utiliza, una version resumida de usar gcc con parametros.

## Referencias
- https://code.visualstudio.com/docs/cpp/config-mingw
- http://mingw-w64.org/doku.php/start
- https://en.wikipedia.org/wiki/MinGW
- https://dev.to/gamegods3/how-to-install-gcc-in-windows-10-the-easier-way-422j
- https://www.40tude.fr/compile-cpp-code-with-vscode-clang/
- https://medium.com/@martin.kunc/c-compilation-and-debugging-in-visual-studio-code-1ca912e59ec7