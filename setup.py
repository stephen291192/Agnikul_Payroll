from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in devapp/__init__.py
from devapp import __version__ as version

setup(
	name="devapp",
	version=version,
	description="Frappe app for development",
	author="Rajesh",
	author_email="rajesh@agnikul.in",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
